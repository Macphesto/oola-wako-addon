import { Component } from '@angular/core';
import { Episode, EpisodeDetailBaseComponent, Movie, MovieDetailBaseComponent, Show } from '@wako-app/mobile-sdk';

@Component({
  selector: 'app-movie-button',
  templateUrl: './episode-button.component.html',
  styleUrls: ['./episode-button.component.scss']
})
export class EpisodeButtonComponent extends EpisodeDetailBaseComponent {
  show: Show;
  episode: Episode;

  openMovie() {
    alert('Should open show');
  }

  setShowEpisode(show: Show, episode: Episode): any {
    this.show = show;
    this.episode = episode;
  }
}
