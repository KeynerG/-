import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {RutaComponent} from './ruta/ruta.component';
import {FormComponent} from './form/form.component';
import {LoginAdminComponent} from './login-admin/login-admin.component'

const routes: Routes = [
  {path:'', component : HomeComponent},
  {path:'rutas', component : RutaComponent},
  {path: 'form', component : FormComponent},
  {path: 'login-admin', component : LoginAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
