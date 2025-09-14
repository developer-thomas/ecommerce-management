import { Routes } from '@angular/router';
export const usersRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./list/list.component').then((m) => m.ListComponent)
  },
 
];