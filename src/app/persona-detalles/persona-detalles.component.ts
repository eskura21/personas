import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-persona-detalles',
  templateUrl: './persona-detalles.component.html',
  styleUrls: ['./persona-detalles.component.css']
})
export class PersonaDetallesComponent implements OnInit {
  persona: Persona = {
    id: 100,
    nombre: 'Prueba',
    email: 'suemail@email.com'
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

  onAceptar() {
    console.log(this.persona);
  }
}
