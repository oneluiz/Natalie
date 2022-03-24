import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/',
    },
    {
        path: 'iniciar-sesion',
        component: LoginComponent,
        data: { title: 'Inciar Sesión'} 
    },
    {
        path: '',
        component: LoginComponent,
        data: { title: 'Inciar Sesión'} 
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
