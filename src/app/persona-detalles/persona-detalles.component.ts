import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-persona-detalles',
  templateUrl: './persona-detalles.component.html',
  styleUrls: ['./persona-detalles.component.css']
})
export class PersonaDetallesComponent {
  persona: Persona = {
    id: 100,
    nombre: 'Prueba',
    email: 'suemail@email.com'
  };
}
