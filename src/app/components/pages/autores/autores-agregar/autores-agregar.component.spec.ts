import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresAgregarComponent } from './autores-agregar.component';

describe('AutoresAgregarComponent', () => {
  let component: AutoresAgregarComponent;
  let fixture: ComponentFixture<AutoresAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoresAgregarComponent]
    });
    fixture = TestBed.createComponent(AutoresAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
