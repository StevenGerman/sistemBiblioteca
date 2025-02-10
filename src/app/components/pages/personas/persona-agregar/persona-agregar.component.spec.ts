import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaAgregarComponent } from './persona-agregar.component';

describe('PersonaAgregarComponent', () => {
  let component: PersonaAgregarComponent;
  let fixture: ComponentFixture<PersonaAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonaAgregarComponent]
    });
    fixture = TestBed.createComponent(PersonaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
