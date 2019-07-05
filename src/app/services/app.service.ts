import { Injectable } from '@angular/core';
import { PluginLoaderService } from './plugin-loarder/plugin-loader.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(protected pluginLoader: PluginLoaderService) {

  }

  loadPlugins() {
    return this.pluginLoader.install('/assets/plugins/manifest.json').pipe(
      switchMap(() => {
        return this.pluginLoader.loadAll('fr');
      })
    );
  }
}
