import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroListarComponent } from './libro-listar.component';

describe('LibroListarComponent', () => {
  let component: LibroListarComponent;
  let fixture: ComponentFixture<LibroListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibroListarComponent]
    });
    fixture = TestBed.createComponent(LibroListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
