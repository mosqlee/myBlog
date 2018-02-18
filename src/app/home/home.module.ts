import { FormsModule } from '@angular/forms';
import { BlogModel } from './blog-detail/blog.model';
import { GetBlogDetailService } from './blog-detail/get-blog-detail.service';
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
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoute),
    NgZorroAntdModule.forRoot(),
    TranslateModule,
    FormsModule
  ],
  declarations: [HomeComponent, AboutComponent, BlogComponent, CameraComponent, BlogDetailComponent],
  providers: [
    BlogService,
    GetBlogDetailService,
    BlogModel
  ],
})
export class HomeModule { }
