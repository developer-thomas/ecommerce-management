import { Routes } from '@angular/router';

/**
 * Rotas para o módulo de usuários.
 * 
 * Define as rotas para a lista de usuários e os detalhes de um usuário específico.
 */
export const usersRoutes: Routes = [
  {
    /**
     * Rota para a lista de usuários.
     * 
     * Carrega o componente `UsersComponent` quando a rota raiz é acessada.
     */
    path: '',
    loadComponent: () => import('./users.component').then(m => m.UsersComponent)
  },
  {
    /**
     * Rota para os detalhes de um usuário específico.
     * 
     * Carrega o componente `DetailsUserComponent` quando a rota `:id` é acessada.
     * O parâmetro `:id` representa o ID do usuário.
     */
    path: ':id',
    loadComponent: () => import('./details-user/details-user.component').then(m => m.DetailsUserComponent)
  }
];