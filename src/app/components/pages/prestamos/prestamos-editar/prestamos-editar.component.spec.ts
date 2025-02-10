import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosEditarComponent } from './prestamos-editar.component';

describe('PrestamosEditarComponent', () => {
  let component: PrestamosEditarComponent;
  let fixture: ComponentFixture<PrestamosEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrestamosEditarComponent]
    });
    fixture = TestBed.createComponent(PrestamosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
