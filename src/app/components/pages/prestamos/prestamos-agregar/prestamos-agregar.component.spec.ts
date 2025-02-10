import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosAgregarComponent } from './prestamos-agregar.component';

describe('PrestamosAgregarComponent', () => {
  let component: PrestamosAgregarComponent;
  let fixture: ComponentFixture<PrestamosAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrestamosAgregarComponent]
    });
    fixture = TestBed.createComponent(PrestamosAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
