import { Routes } from "@angular/router";

export const homeRoutes: Routes = [
    { path: '', redirectTo: 'entrar', pathMatch: 'full' },
    {
        path: 'entrar',
        loadComponent: () => import('./sign-in/sign-in.component')
            .then(m => m.SignInComponent)
    },
    {
        path: 'recuperar-senha',
        loadComponent: () => import('./forgot-password/forgot-password.component')
            .then(m => m.ForgotPasswordComponent)
    },
    {
        path: 'resetar-senha',
        loadComponent: () => import('./reset-password/reset-password.component')
            .then(m => m.ResetPasswordComponent)
    }

] as Routes;