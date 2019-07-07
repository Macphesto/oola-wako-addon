import { Component } from '@angular/core';
import { Episode, EpisodeDetailBaseComponent, Show } from '@wako-app/mobile-sdk';

@Component({
  templateUrl: './episode-button.component.html',
  styleUrls: ['./episode-button.component.scss']
})
export class EpisodeButtonComponent extends EpisodeDetailBaseComponent {
  show: Show;
  episode: Episode;

  openEpisode() {
    alert('Should open ' + this.show.title + ' ' + this.episode.code);
  }

  setShowEpisode(show: Show, episode: Episode): any {
    this.show = show;
    this.episode = episode;
  }
}
