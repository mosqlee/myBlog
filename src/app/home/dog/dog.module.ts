import { mainRoute } from './dog.route';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoute)
  ],
  declarations: [MainComponent, PhotoComponent]
})
export class DogModule { }
