import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientesComponent} from './clientes/clientes.component';
import {RouterModule, Routes} from "@angular/router";
import {environment} from "../../environments/environment";
import {AngularFireModule} from "@angular/fire";
import { AgregarClientesComponent } from './agregar-clientes/agregar-clientes.component';
import {ClienteRoutingModule} from "./cliente.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";

@NgModule({
  declarations: [ClientesComponent, AgregarClientesComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    FlexModule,
  ]
})
export class ClienteModule { }
