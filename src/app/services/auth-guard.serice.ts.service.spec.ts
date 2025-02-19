import { TestBed } from '@angular/core/testing';

import { AuthGuardSericeTsService } from './auth-guard.serice.ts.service';

describe('AuthGuardSericeTsService', () => {
  let service: AuthGuardSericeTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardSericeTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
