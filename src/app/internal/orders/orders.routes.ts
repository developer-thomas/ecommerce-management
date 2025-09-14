import { Routes } from '@angular/router';

/**
 * Rotas para o módulo de usuários.
 * 
 * Define as rotas para a lista de usuários e os detalhes de um usuário específico.
 */
export const ordersRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./orders.component').then(m => m.OrdersComponent)
    },
    {
        path: 'nova-box',
        loadComponent: () => import('./mounting-box/mounting-box.component').then(m => m.MountingBoxComponent)
    },
    {
        path: 'carrinho-box',
        loadComponent: () => import('./cart-box/cart-box.component').then(m => m.CartBoxComponent)
    },
    {
        path: ':id',
        loadComponent: () => import('./details-order/details-order.component').then(m => m.DetailsOrderComponent)
    }
];