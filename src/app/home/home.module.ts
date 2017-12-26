import { BlogService } from './blog/blog.service';
import { homeRoute } from './home.route';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CameraComponent } from './camera/camera.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoute),
    NgZorroAntdModule.forRoot(),
    TranslateModule
  ],
  declarations: [HomeComponent, AboutComponent, BlogComponent, CameraComponent],
  providers: [
    BlogService
  ],
})
export class HomeModule { }
