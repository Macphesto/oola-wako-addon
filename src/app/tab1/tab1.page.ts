import { Component, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PluginLoaderService } from '../services/plugin-loarder/plugin-loader.service';

import { Movie } from '@wako-app/mobile-sdk';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  @ViewChild('movieRef', { read: ViewContainerRef })
  movieVCRef: ViewContainerRef;
  @ViewChild('episodeRef', { read: ViewContainerRef })
  episodeVCRef: ViewContainerRef;

  constructor(private injector: Injector, private pluginLoader: PluginLoaderService) {}

  ngOnInit() {
    this.loadPlugin();
  }

  loadPlugin() {
    const movie = new Movie();
    movie.title = 'Le title';
    movie.traktId = 12345;

    this.pluginLoader.createComponent('movies', this.movieVCRef, movie);
  }
}
