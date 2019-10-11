import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas: Persona[];

  constructor() { }

  getPersonas(): Observable<Persona[]> {
    return of(this.personas);
  }
}
