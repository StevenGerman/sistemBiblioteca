import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasEditarComponent } from './materias-editar.component';

describe('MateriasEditarComponent', () => {
  let component: MateriasEditarComponent;
  let fixture: ComponentFixture<MateriasEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriasEditarComponent]
    });
    fixture = TestBed.createComponent(MateriasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
