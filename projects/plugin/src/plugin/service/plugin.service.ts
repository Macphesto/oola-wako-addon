import { Injectable } from '@angular/core';
import { PluginBaseService, wakoLog } from '@wako-app/mobile-sdk';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class PluginService extends PluginBaseService {
  constructor(protected translate: TranslateService) {
    super();
  }

  initialize() {
    logData('plugin initialized');
  }

  afterInstall(): any {
    logData('plugin installed');
  }

  afterUpdate(): any {
    logData('plugin updated');
  }

  setTranslation(lang: string, translations: any): any {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.translate.setTranslation(lang, translations);
  }
}

export function logData(...data: any) {
  wakoLog('plugin.my-plugin', data);
}
