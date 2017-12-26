import { EnterComponent } from './enter/enter.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

export const appRoute = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'main', component: EnterComponent },
    { path: 'home', loadChildren: './home/home.module#HomeModule'}
];
// @NgModule({
//     imports: [RouterModule.forRoot(appRoute)],
//     exports: [RouterModule]
// })

// export class AppRoutingModule { }
