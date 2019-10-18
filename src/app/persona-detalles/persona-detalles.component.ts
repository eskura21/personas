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
    id: 0,
    nombre: '',
    email: ''
  };

  constructor(
    private route: ActivatedRoute,
    private personaService: PersonaService) { }

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    console.log(id);

    if (id !== 0) {
      this.personaService.getPersona(id).subscribe(
        personaRecibida => this.persona = personaRecibida
      );
    }
  }

  onAceptar() {
    console.log(this.persona);

    if (this.persona.id === 0) {
      console.log('Insertar');
    } else {
      console.log('Modificación');
    }
  }
}
