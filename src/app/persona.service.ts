import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { Observable, of } from 'rxjs';
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
      catchError(this.gestionarError<Persona[]>('getPersonas', []))
    );
  }

  getPersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.url + id).pipe(
      catchError(
        this.gestionarError<Persona>(
          `getPersona(${id})`,
          { id: 0, nombre: '', email: '' }
        )
      )
    );
  }

  private gestionarError<T>(categoria: string, objetoADevolver: T):
    (err: any, caught: Observable<T>) => Observable<T> {
    return (error) => {
      console.error(categoria, error.message);
      this.mensajeService.setMensaje('Error al obtener las personas', 'danger');
      return of(objetoADevolver);
    };
  }
}
