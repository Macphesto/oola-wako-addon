import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { MyPluginService } from './service/my-plugin.service';
import { MovieButtonComponent } from './movie-button/movie-button.component';

import { PluginBaseModule } from '@wako-app/mobile-sdk';
import { SettingsComponent } from './settings/settings.component';
import { TranslateModule } from '@ngx-translate/core';
import { EpisodeButtonComponent } from './episode-button/episode-button.component';

const components = [MovieButtonComponent, EpisodeButtonComponent, SettingsComponent];

@NgModule({
  imports: [CommonModule, IonicModule.forRoot(), TranslateModule.forRoot()],
  declarations: [...components],
  entryComponents: [...components],
  providers: [MyPluginService]
})
export class PluginModule extends PluginBaseModule {
  static pluginService = MyPluginService;
  static settingsComponent = SettingsComponent;
  static movieComponent = MovieButtonComponent;
  static episodeComponent = EpisodeButtonComponent;
}
