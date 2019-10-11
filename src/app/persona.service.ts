import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private url = 'http://localhost:3000/personas/';
  personas: Persona[];

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url);
  }
}
