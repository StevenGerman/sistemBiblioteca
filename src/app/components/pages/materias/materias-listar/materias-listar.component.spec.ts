import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasListarComponent } from './materias-listar.component';

describe('MateriasListarComponent', () => {
  let component: MateriasListarComponent;
  let fixture: ComponentFixture<MateriasListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriasListarComponent]
    });
    fixture = TestBed.createComponent(MateriasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
