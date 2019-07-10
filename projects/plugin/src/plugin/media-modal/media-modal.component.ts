import { Component, OnInit } from '@angular/core';
import { Episode, Movie, Show } from '@wako-app/mobile-sdk';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-media-modal',
  templateUrl: './media-modal.component.html',
  styleUrls: ['./media-modal.component.scss'],
})
export class MediaModalComponent implements OnInit {

  movie: Movie;

  show: Show;
  episode: Episode;

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
  }


  dismiss() {
    this.modalCtrl.dismiss();
  }
}
