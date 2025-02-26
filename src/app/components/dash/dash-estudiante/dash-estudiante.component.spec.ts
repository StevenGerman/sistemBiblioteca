import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashEstudianteComponent } from './dash-estudiante.component';

describe('DashEstudianteComponent', () => {
  let component: DashEstudianteComponent;
  let fixture: ComponentFixture<DashEstudianteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashEstudianteComponent]
    });
    fixture = TestBed.createComponent(DashEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
