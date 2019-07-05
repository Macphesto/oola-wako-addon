import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

import { wakoLog } from '@wako-app/mobile-sdk';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  constructor(public modalCtrl: ModalController, private translate: TranslateService) {}

  ngOnInit() {
    wakoLog('Test Addon', 'plopplop');
    console.log('translate', this.translate.currentLang);
    console.log('translate', this.translate.instant('settings.title'));
  }
}
