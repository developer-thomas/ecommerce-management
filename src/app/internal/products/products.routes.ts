import { Routes } from '@angular/router';

export const productsRoutes: Routes = [ 
  {
    path: '',
    loadComponent: () => import('./products.component')
        .then(m => m.ProductsComponent)
  },
  {
    path: 'novo-produto',
    loadComponent: () => import('./form-products/form-products.component')
        .then(m => m.FormProductsComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./deatails-product/deatails-product.component')
        .then(m => m.DeatailsProductComponent)
  }
];