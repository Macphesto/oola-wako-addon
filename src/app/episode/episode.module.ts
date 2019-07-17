import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EpisodePage } from './episode.page';
import { EpisodePopoverOptionComponent } from './episode-popover-option/episode-popover-option.component';

@NgModule({
  entryComponents: [EpisodePopoverOptionComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: EpisodePage}])
  ],
  declarations: [EpisodePage, EpisodePopoverOptionComponent]
})
export class EpisodePageModule {
}
