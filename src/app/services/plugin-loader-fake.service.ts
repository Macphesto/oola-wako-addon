import { ComponentFactoryResolver, Injectable, Injector, ViewContainerRef } from '@angular/core';

import {
  EpisodeDetailBaseComponent,
  MovieDetailBaseComponent,
  PluginBaseService, PluginManifest,
  PluginMap, PluginObjectStored,
  WakoBaseHttpService
} from '@wako-app/mobile-sdk';
import { forkJoin, from, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { Storage } from '@ionic/storage';
import { switchMap, tap } from 'rxjs/operators';
import { PluginModule } from '../../../projects/plugin/src/plugin/plugin.module';

@Injectable({
  providedIn: 'root'
})
export class PluginLoaderFakeService {
  private pluginsMap = new Map<string, PluginMap>();

  constructor(
    private translateService: TranslateService,
    private storage: Storage,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    console.log('PluginLoaderFakeService');
  }

  install(manifestUrl: string, lang: string) {
    manifestUrl = manifestUrl.replace('/plugins/', '/');

    let pluginId = null;
    return WakoBaseHttpService.get<PluginManifest>(manifestUrl).pipe(
      switchMap(manifest => {
        pluginId = manifest.id;

        const paths = manifestUrl.split('/');
        paths.pop();
        const baseUrl = paths.join('/');

        const pluginObjectStored = new PluginObjectStored();

        pluginObjectStored.manifestUrl = manifestUrl;
        pluginObjectStored.manifest = manifest;

        pluginObjectStored.source = null;

        if (manifest.languages) {
          pluginObjectStored.languages = {};
          const obss = [];
          Object.keys(manifest.languages).forEach(langKey => {
            const langUrl = manifest.languages[langKey].match('http') ? manifest.languages[langKey] : baseUrl + manifest.languages[langKey];

            const obs = WakoBaseHttpService.get(langUrl).pipe(
              tap(data => {
                pluginObjectStored.languages[langKey] = data;
              })
            );

            obss.push(obs);
          });

          return forkJoin(obss);
        }
        return from(this.storage.set(pluginObjectStored.manifest.id, pluginObjectStored));
      }),

      switchMap(() => {
        return from(this.addToList(pluginId));
      }),
      switchMap(() => {
        return this.load(pluginId, lang, true);
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

  private load<T>(pluginId: string, lang: string, isFirstLoad: boolean) {
    return from(this.storage.get(pluginId)).pipe(
      tap((plugin: PluginObjectStored) => {
        return this.initialize(plugin, lang, isFirstLoad);
      })
    );
  }

  private initialize(plugin: PluginObjectStored, lang: string, isFirstLoad: boolean) {
    const moduleType = PluginModule;

    const pluginService = this.injector.get(moduleType.pluginService) as PluginBaseService;

    this.pluginsMap.set(plugin.manifest.id, { plugin, moduleFactory: null, moduleRef: null });

    pluginService.initialize();

    if (isFirstLoad) {
      pluginService.afterInstall();
    }

    if (plugin.languages.hasOwnProperty(lang)) {
      pluginService.setTranslation(lang, plugin.languages[lang]);
    }
  }

  createComponent(action: PluginAction | 'settings', viewContainerRef: ViewContainerRef, data?: any) {
    this.pluginsMap.forEach(pluginMap => {
      const moduleType = PluginModule;

      if (action === 'movies' && moduleType.movieComponent) {
        const compFactory = this.componentFactoryResolver.resolveComponentFactory<MovieDetailBaseComponent>(moduleType.movieComponent);
        const movieComponent = viewContainerRef.createComponent<MovieDetailBaseComponent>(compFactory);

        movieComponent.instance.setMovie(data.movie);
      } else if (action === 'episodes' && moduleType.episodeComponent) {
        const compFactory = this.componentFactoryResolver.resolveComponentFactory<EpisodeDetailBaseComponent>(moduleType.episodeComponent);
        const episodeComponent = viewContainerRef.createComponent<EpisodeDetailBaseComponent>(compFactory);

        episodeComponent.instance.setShowEpisode(data.show, data.episode);
      } else if (action === 'settings' && moduleType.settingsComponent) {
        const compFactory = this.componentFactoryResolver.resolveComponentFactory<any>(moduleType.settingsComponent);
        viewContainerRef.createComponent<any>(compFactory);
      }
    });
  }
}

declare type PluginAction = 'movies' | 'episodes';
