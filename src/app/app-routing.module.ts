import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/',
    },
    {
        path: 'usuario',
        loadChildren: () =>
            import('./modules/usuario/usuario.module').then(
                m => m.UsuarioModule
            ),
    },
    {
        path: '',
        loadChildren: () =>
            import('./modules/home/home.module').then(
                m => m.HomeModule
            ),
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () =>
        import('./modules/home/home.module').then(m => m.HomeModule),
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
