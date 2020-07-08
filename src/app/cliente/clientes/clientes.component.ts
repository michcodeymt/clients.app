import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {appState} from "../../app.reducer";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  dato$ : Observable<any>;
  clientes: any[] = new Array<any>();
  suma = 0;
  contador = 0;

  constructor(private store: Store<appState>, private db: AngularFirestore) {
    this.dato$ = store.select('txt');
  }

  ngOnInit(): void {
    this.clientes.length = 0;
    this.db.collection('clientes').get().subscribe((resultado) => {
      resultado.docs.forEach((item) => {
        const cliente = item.data()
        const edad = cliente.edad;
        //cliente.id = item.id;
        //cliente.ref = item.ref;
        this.contador ++;
        this.suma += edad;

        // const media = this.contador ++;

        /*let getSD = function (data) {
          const m = media;
          return Math.sqrt(data.reduce(function (sq, n) {
            return sq + Math.pow(n - m, 2);
          }, 0) / (data.length - 1))
        }

        console.log(getSD(media));*/

        /// Lista de clientes
       this.clientes.push(cliente);
      });
    });
  }

  message() {
    this.store.dispatch({type: 'clientes'})
  }
}
