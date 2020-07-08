import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }

  mensajeCorrecto(titulo: string, mensaje: string) {
    swal({
      type: 'success',
      title: titulo,
      text: mensaje,
      showConfirmButton: false,
      timer: 2000
    });
  }

}
