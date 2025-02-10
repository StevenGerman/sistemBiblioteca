import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaEditarComponent } from './persona-editar.component';

describe('PersonaEditarComponent', () => {
  let component: PersonaEditarComponent;
  let fixture: ComponentFixture<PersonaEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonaEditarComponent]
    });
    fixture = TestBed.createComponent(PersonaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
