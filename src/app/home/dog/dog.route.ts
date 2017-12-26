import { PhotoComponent } from './photo/photo.component';
import { MainComponent } from './main/main.component';

export const mainRoute = [
    {
        path: '',
        //  redirectTo: 'opinions',
        component: MainComponent,
        children: [
            { path: 'photo', component: PhotoComponent },
        ]
    }
];

