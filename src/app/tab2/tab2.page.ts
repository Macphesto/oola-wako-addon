import { Component, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PluginLoaderService } from '../services/plugin-loarder/plugin-loader.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild('settingsRef', { read: ViewContainerRef })
  settingsRef: ViewContainerRef;

  constructor(private injector: Injector, private pluginLoader: PluginLoaderService) {}

  ngOnInit() {
    this.loadPlugin();
  }

  loadPlugin() {

    this.pluginLoader.createComponent('settings', this.settingsRef);
  }
}
