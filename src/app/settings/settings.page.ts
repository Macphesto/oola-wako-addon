import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PluginLoaderService } from '@wako-app/mobile-sdk';

@Component({
  selector: 'app-tab2',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage implements OnInit {
  @ViewChild('settingsRef', {read: ViewContainerRef})
  settingsRef: ViewContainerRef;

  constructor(private pluginLoader: PluginLoaderService) {
  }

  ngOnInit() {
    this.loadPlugin();
  }

  loadPlugin() {

    this.pluginLoader.createComponent('settings', this.settingsRef);
  }
}
