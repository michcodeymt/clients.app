import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularFireStorage} from "@angular/fire/storage";
import {AngularFirestore} from "@angular/fire/firestore";
import {ActivatedRoute, Router} from "@angular/router";
import {MensajesService} from "../../services/message.service";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {appState} from "../../app.reducer";

@Component({
  selector: 'app-agregar-clientes',
  templateUrl: './agregar-clientes.component.html',
  styleUrls: ['./agregar-clientes.component.scss']
})
export class AgregarClientesComponent implements OnInit {
  formularioCliente: FormGroup;

  constructor(private fb: FormBuilder, private storage: AngularFireStorage, private db: AngularFirestore, private activeRoute: ActivatedRoute, private msj: MensajesService, private route: Router) {
  }

  ngOnInit(): void {
    this.formularioCliente = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      fechaNacimiento: ['', Validators.required]
    });
  }

  agregar() {
    this.formularioCliente.value.fechaNacimiento = new Date(this.formularioCliente.value.fechaNacimiento);
    console.log(this.formularioCliente.value);
    this.db.collection('clientes').add(this.formularioCliente.value).then((termino) => {
      this.msj.mensajeCorrecto('Agregar', 'Se agregó correctamente');
      this.route.navigate(['/clientes']);
    });
  }
}
