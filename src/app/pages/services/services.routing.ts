import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';

const routes: Routes = [
    { path: '', component: ServicesComponent}
]
export const routing: ModuleWithProviders = RouterModule.forChild(routes); 
