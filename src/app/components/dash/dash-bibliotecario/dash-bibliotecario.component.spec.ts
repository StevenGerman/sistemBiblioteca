import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBibliotecarioComponent } from './dash-bibliotecario.component';

describe('DashBibliotecarioComponent', () => {
  let component: DashBibliotecarioComponent;
  let fixture: ComponentFixture<DashBibliotecarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashBibliotecarioComponent]
    });
    fixture = TestBed.createComponent(DashBibliotecarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
