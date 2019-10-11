import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas: Persona[] = [
    { id: 1, nombre: 'Javier', email: 'javier@eskura21.com' },
    { id: 2, nombre: 'Pepe', email: 'pepe@sucasa.com' }
  ];

  constructor() { }

  getPersonas(): Observable<Persona[]> {
    return of(this.personas);
  }
}
