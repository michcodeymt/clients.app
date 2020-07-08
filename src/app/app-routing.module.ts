import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'clientes', pathMatch: 'full'
  },
  {
    path: 'clientes',
    loadChildren: ()=> import('./cliente/cliente.module').then(mod=> mod.ClienteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
