import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesAgregarComponent } from './roles-agregar.component';

describe('RolesAgregarComponent', () => {
  let component: RolesAgregarComponent;
  let fixture: ComponentFixture<RolesAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolesAgregarComponent]
    });
    fixture = TestBed.createComponent(RolesAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
