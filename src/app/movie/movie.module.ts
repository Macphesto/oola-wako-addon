import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviePage } from './movie.page';
import { MoviePopoverOptionComponent } from './movie-popover-option/movie-popover-option.component';

@NgModule({
  entryComponents: [MoviePopoverOptionComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: MoviePage}])
  ],
  declarations: [MoviePage, MoviePopoverOptionComponent]
})
export class MoviePageModule {
}
