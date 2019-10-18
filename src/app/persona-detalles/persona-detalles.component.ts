import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PersonaService } from '../persona.service';
import { MensajeService } from '../mensaje.service';
import { Location } from '@angular/common';

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
    private personaService: PersonaService,
    private mensajeService: MensajeService,
    private location: Location) { }

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
      this.personaService.insert(this.persona).subscribe(
        personaRecibida => {
          this.mensajeService.setMensaje('Persona insertada con el id ' + personaRecibida.id, 'success');
          this.location.back();
        }
      );
    } else {
      console.log('Modificación');
    }
  }
}
