import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-personas-tabla',
  templateUrl: './personas-tabla.component.html',
  styleUrls: ['./personas-tabla.component.css']
})
export class PersonasTablaComponent implements OnInit {

  personas: Persona[] = [];

  constructor() { }

  ngOnInit() {
  }

}
