import { Injectable } from '@angular/core';
import { PluginBaseService } from '@wako-app/mobile-sdk';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MyPluginService extends PluginBaseService {
  constructor(protected translate: TranslateService) {
    super();
  }

  initialize() {
    console.log('Initialize plugin');
  }

  setTranslation(lang: string, translations: any): any {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.translate.setTranslation(lang, translations);
  }
}
