import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosListarComponent } from './prestamos-listar.component';

describe('PrestamosListarComponent', () => {
  let component: PrestamosListarComponent;
  let fixture: ComponentFixture<PrestamosListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrestamosListarComponent]
    });
    fixture = TestBed.createComponent(PrestamosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
