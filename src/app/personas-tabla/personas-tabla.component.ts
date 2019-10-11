import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-personas-tabla',
  templateUrl: './personas-tabla.component.html',
  styleUrls: ['./personas-tabla.component.css']
})
export class PersonasTablaComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.personaService.getPersonas().subscribe(
      personas => this.personas = personas
    );
  }

}
