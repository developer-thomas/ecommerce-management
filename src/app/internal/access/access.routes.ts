import { Routes } from '@angular/router';

export const accessRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./access.component').then(m => m.AccessComponent)
  },
  {
    path: 'novo-colaborador',
    loadComponent: () => import('./form-access/form-access.component')
        .then(m => m.FormAccessComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./edit/edit.component')
        .then(m => m.EditComponent)
  },
];