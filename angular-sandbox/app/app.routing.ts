import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent, AppComponent2 } from './app.component';
import { AppComponent3 } from './app.component3';

const appRoutes: Routes = [
    { path: 'test', component: AppComponent2 },
    { path: '**', component: AppComponent3}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

