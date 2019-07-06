import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { logData } from '../service/my-plugin.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  constructor(public modalCtrl: ModalController, private translate: TranslateService) {}

  ngOnInit() {
    logData('Current lang', this.translate.currentLang);
    logData('Test instant translate', this.translate.instant('settings.title'));
  }
}
