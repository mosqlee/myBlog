
import { HomeComponent } from './home/home.component';
import { CameraComponent } from './camera/camera.component';

import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';

export const homeRoute = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'blog', component: BlogComponent },
            { path: 'camera', component: CameraComponent },
            { path: 'about', component: AboutComponent },
            {
                path: 'dog',
                loadChildren: './dog/dog.module#DogModule'
            },
        ]
    }
];
