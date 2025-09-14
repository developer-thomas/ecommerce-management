import { Routes } from "@angular/router";
import { ProductsComponent } from "./products/products.component";

export const internalRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
    },
    {
        path: 'usuarios',
        loadChildren: () => import('./users/users.routes')
            .then(m => m.usersRoutes)
    },
    {
        path: 'pedidos',
        loadChildren: () => import('./orders/orders.routes')
            .then(m => m.ordersRoutes)
    },
    {
        path: 'coupons',
        loadChildren: () => import('./coupons/coupons.routes')
            .then((m) => m.usersRoutes)
    },
    {
        path: 'produtos',
        loadChildren: () => import('./products/products.routes')
            .then(m => m.productsRoutes)
    },
    {
        path: 'financeiro',
        loadComponent: () => import('./financial/financial.component')
            .then(m => m.FinancialComponent)
    },
    {
        path: 'acessos',
        loadChildren: () => import('./access/access.routes')
            .then(m => m.accessRoutes)
    },
    {
        path: 'entregas',
        loadComponent: () => import('./deliveries/deliveries.component')
            .then(m => m.DeliveriesComponent)
    }
    
] as Routes;