import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PersonaService } from '../persona.service';

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

  constructor(
    private route: ActivatedRoute,
    private personaService: PersonaService) { }

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.personaService.getPersona(id).subscribe(
      personaRecibida => this.persona = personaRecibida
    );
  }

  onAceptar() {
    console.log(this.persona);
  }
}
