import { Injectable, Injector, NgModuleFactory, NgModuleRef, ViewContainerRef } from '@angular/core';

import { PLUGIN_EXTERNALS_MAP } from './plugin-externals';

import { EpisodeDetailBaseComponent, MovieDetailBaseComponent, PluginBaseService, WakoBaseHttpService } from '@wako-app/mobile-sdk';
import { switchMap, tap } from 'rxjs/operators';
import { forkJoin, from, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { Storage } from '@ionic/storage';

const SystemJs = window.System;

let source: string;

// Hack
SystemJs.instantiate = function(id) {
  const loader = this;

  if (this.registerRegistry[id]) {
    return this.registerRegistry[id];
  }
  return new Promise((resolve, reject) => {
    (0, eval)(source + '\n//# sourceURL=' + 'fakeUrl');
    resolve(loader.getRegister());
  });
};

@Injectable({
    providedIn: 'root'
})
export class PluginLoaderService {
  private pluginsMap = new Map<string, PluginMap>();

  constructor(private translateService: TranslateService, private storage: Storage, private injector: Injector) {

    this.provideExternals();
  }

  private provideExternals() {
    Object.keys(PLUGIN_EXTERNALS_MAP).forEach(externalKey => window.define(externalKey, [], () => PLUGIN_EXTERNALS_MAP[externalKey]));
  }

  install(manifestUrl) {
    let pluginId = null;
    return WakoBaseHttpService.get<PluginManifest>(manifestUrl).pipe(
      switchMap(manifest => {
        pluginId = manifest.id;

        const paths = manifestUrl.split('/');
        paths.pop();
        const baseUrl = paths.join('/');

        const pluginUrl = manifest.entryPoint.match('http') ? manifest.entryPoint : baseUrl + manifest.entryPoint;

        const pluginObjectStored = new PluginObjectStored();
        pluginObjectStored.manifestUrl = manifestUrl;
        pluginObjectStored.manifest = manifest;

        return WakoBaseHttpService.get<string>(pluginUrl).pipe(
          switchMap(pluginSource => {
            pluginObjectStored.source = pluginSource;
            if (manifest.languages) {
              pluginObjectStored.languages = {};
              const obss = [];
              Object.keys(manifest.languages).forEach(lang => {
                const langUrl = manifest.languages[lang].match('http') ? manifest.languages[lang] : baseUrl + manifest.languages[lang];

                const obs = WakoBaseHttpService.get(langUrl).pipe(
                  tap(data => {
                    pluginObjectStored.languages[lang] = data;
                  })
                );

                obss.push(obs);
              });

              return forkJoin(obss);
            }
            return of(true);
          }),
          switchMap(() => {
            return from(this.storage.set(pluginObjectStored.manifest.id, pluginObjectStored));
          })
        );
      }),

      switchMap(() => {
        return from(this.addToList(pluginId));
      })
    );
  }

  private getAllInstalled(): Promise<string[]> {
    return this.storage.get('plugin_list').then(data => {
      if (!data) {
        data = [];
      }
      return data;
    });
  }

  private addToList(pluginId: string) {
    return from(this.getAllInstalled()).pipe(
      switchMap(list => {
        if (list.includes(pluginId)) {
          return of(true);
        }
        list.push(pluginId);
        return from(this.storage.set('plugin_list', list));
      })
    );
  }

  loadAll(lang: string) {
    this.translateService.use(lang);

    return from(this.getAllInstalled()).pipe(
      switchMap(list => {
        const obss = [];

        list.forEach(pluginId => {
          obss.push(this.load(pluginId, lang));
        });

        return forkJoin(obss);
      })
    );
  }

  private load<T>(pluginId: string, lang: string) {
    return from(this.storage.get(pluginId)).pipe(
      switchMap((plugin: PluginObjectStored) => {
        source = plugin.source;

        return from(SystemJs.import(document.location.href + '/' + pluginId)).pipe(
          tap(module => {
            return this.initialize(plugin, lang, module.default.default);
          })
        );
      })
    );
  }

  private initialize(plugin: PluginObjectStored, lang: string, moduleFactory: NgModuleFactory<any>) {
    const moduleType = moduleFactory.moduleType as any;

    const moduleRef = moduleFactory.create(this.injector);

    const pluginService = moduleRef.injector.get(moduleType.pluginService) as PluginBaseService;

    this.pluginsMap.set(plugin.manifest.id, { plugin, moduleFactory, moduleRef });

    pluginService.initialize();

    if (plugin.languages.hasOwnProperty(lang)) {
      pluginService.setTranslation(lang, plugin.languages[lang]);
    }
  }

  createComponent(action: PluginAction | 'settings', viewContainerRef: ViewContainerRef, data?: any) {
    this.pluginsMap.forEach(pluginMap => {
      const moduleType = pluginMap.moduleFactory.moduleType as any;
      const moduleRef = pluginMap.moduleRef;

      if (action === 'movies' && moduleType.movieComponent) {
        const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory<MovieDetailBaseComponent>(moduleType.movieComponent);
        const movieComponent = viewContainerRef.createComponent<MovieDetailBaseComponent>(compFactory);

        movieComponent.instance.setMovie(data.movie);
      } else if (action === 'episodes' && moduleType.episodeComponent) {
        const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory<EpisodeDetailBaseComponent>(
          moduleType.episodeComponent
        );
        const episodeComponent = viewContainerRef.createComponent<EpisodeDetailBaseComponent>(compFactory);

        episodeComponent.instance.setShowEpisode(data.show, data.episode);

      } else if (action === 'settings' && moduleType.settingsComponent) {
        const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory<any>(moduleType.settingsComponent);
        viewContainerRef.createComponent<any>(compFactory);
      }
    });
  }
}

declare type PluginAction = 'movies' | 'episodes';

export interface PluginMap {
  plugin: PluginObjectStored;
  moduleFactory: NgModuleFactory<any>;
  moduleRef: NgModuleRef<any>;
}

export class PluginObjectStored {
  manifest: PluginManifest;
  manifestUrl: string;
  source: string;
  languages: { [key: string]: {} };
}

export interface PluginManifest {
  version: string;
  id: string;
  name: string;
  description: string;
  actions: PluginAction[];
  entryPoint: string;
  languages: { [key: string]: string };
}
