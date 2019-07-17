import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PluginLoaderService } from '@wako-app/mobile-sdk';

@Component({
  selector: 'wk-episode-popover-option',
  templateUrl: './episode-popover-option.component.html'
})
export class EpisodePopoverOptionComponent implements OnInit {
  @ViewChild('episodeRef', {read: ViewContainerRef})
  episodeRef: ViewContainerRef;

  constructor(private pluginLoader: PluginLoaderService,) {
  }

  ngOnInit(): void {
    this.loadPlugin();
  }

  loadPlugin() {
    this.pluginLoader.createComponent('episodes-options', this.episodeRef);
  }
}
