import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaListarComponent } from './persona-listar.component';

describe('PersonaListarComponent', () => {
  let component: PersonaListarComponent;
  let fixture: ComponentFixture<PersonaListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonaListarComponent]
    });
    fixture = TestBed.createComponent(PersonaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
