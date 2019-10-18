import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { MensajeService } from '../mensaje.service';

@Component({
  selector: 'app-personas-tabla',
  templateUrl: './personas-tabla.component.html',
  styleUrls: ['./personas-tabla.component.css']
})
export class PersonasTablaComponent implements OnInit {

  personas: Persona[] = [];

  constructor(
    private personaService: PersonaService,
    private mensajeService: MensajeService) { }

  ngOnInit() {
    this.cargarLista();
  }

  private cargarLista() {
    this.personaService.getPersonas().subscribe(personas => this.personas = personas);
  }

  onBorrar(id: number) {
    if (confirm(`¿Estás seguro de que quieres borrar el id ${id}?`)) {
      this.personaService.delete(id).subscribe(
        _ => {
          this.mensajeService.setMensaje(
            `Se ha borrado la persona cuyo id es ${id}`,
            'success');
          this.cargarLista();
        }
      );
    } else {
      this.mensajeService.setMensaje(
        `Se ha cancelado el borrado de la persona cuyo id es ${id}`,
        'primary');
    }

    return false;
  }
}
