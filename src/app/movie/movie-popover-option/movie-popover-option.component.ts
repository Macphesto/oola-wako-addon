import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PluginLoaderService } from '@wako-app/mobile-sdk';

@Component({
  selector: 'wk-movie-popover-option',
  templateUrl: './movie-popover-option.component.html'
})
export class MoviePopoverOptionComponent implements OnInit {
  @ViewChild('movieRef', {read: ViewContainerRef})
  movieVCRef: ViewContainerRef;

  constructor(public popoverController: PopoverController, private pluginLoader: PluginLoaderService,) {
  }

  ngOnInit(): void {
    this.loadPlugin();
  }

  loadPlugin() {
    this.pluginLoader.createComponent('movies-options', this.movieVCRef);
  }
}
