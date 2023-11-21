import { Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        component: AuthComponent,
        loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        loadChildren: () => import('./views/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule),
    }
];
