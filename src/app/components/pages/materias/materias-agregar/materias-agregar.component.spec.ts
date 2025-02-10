import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasAgregarComponent } from './materias-agregar.component';

describe('MateriasAgregarComponent', () => {
  let component: MateriasAgregarComponent;
  let fixture: ComponentFixture<MateriasAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriasAgregarComponent]
    });
    fixture = TestBed.createComponent(MateriasAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
