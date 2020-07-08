import {RouterModule, Routes} from "@angular/router";
import {ClientesComponent} from "./clientes/clientes.component";
import {AgregarClientesComponent} from "./agregar-clientes/agregar-clientes.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    component: ClientesComponent,
  },
  {
    path: 'nuevo',
    component: AgregarClientesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ClienteRoutingModule {
}
