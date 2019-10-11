import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MensajeService } from './mensaje.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private url = 'http://localhost:3000/personas/';
  personas: Persona[];

  constructor(
    private http: HttpClient,
    private mensajeService: MensajeService) { }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url).pipe(
      catchError(
        (error) => {
          console.error('PersonaService.getPersonas()', error.message);
          this.mensajeService.setMensaje('Error al obtener las personas', 'danger');
          return [];
        }
      )
    );
  }
}
