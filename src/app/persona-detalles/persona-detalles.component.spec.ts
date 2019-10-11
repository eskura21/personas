import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaDetallesComponent } from './persona-detalles.component';

describe('PersonaDetallesComponent', () => {
  let component: PersonaDetallesComponent;
  let fixture: ComponentFixture<PersonaDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
