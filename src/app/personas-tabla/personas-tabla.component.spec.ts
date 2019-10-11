import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasTablaComponent } from './personas-tabla.component';

describe('PersonasTablaComponent', () => {
  let component: PersonasTablaComponent;
  let fixture: ComponentFixture<PersonasTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonasTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
