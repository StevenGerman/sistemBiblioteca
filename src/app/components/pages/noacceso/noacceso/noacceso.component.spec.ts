import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoaccesoComponent } from './noacceso.component';

describe('NoaccesoComponent', () => {
  let component: NoaccesoComponent;
  let fixture: ComponentFixture<NoaccesoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoaccesoComponent]
    });
    fixture = TestBed.createComponent(NoaccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
