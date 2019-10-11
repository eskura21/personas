import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  nivel = 'primary';
  mensaje = '';

  constructor() { }

  getMensaje(): Observable<string> {
    return of(this.mensaje);
  }

  setMensaje(mensaje: string, nivel: string) {
    this.mensaje = mensaje;
    this.nivel = nivel;
  }

  clear() {
    this.mensaje = '';
    this.nivel = '';
  }
}
