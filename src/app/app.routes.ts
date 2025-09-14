import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InternalComponent } from './internal/internal.component';

export const routes: Routes = [

    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    {
        path: 'inicio',
        component: HomeComponent,
        loadChildren: () => import('./home/home.routes')
            .then(m => m.homeRoutes)
    },
    {
        path: 'interno',
        component: InternalComponent,
        loadChildren: () => import('./internal/internal.routes')
            .then(m => m.internalRoutes)
    }
];
