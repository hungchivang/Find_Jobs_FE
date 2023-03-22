import { TestBed } from '@angular/core/testing';

import { CompanyGuardGuard } from './company-guard.guard';

describe('CompanyGuardGuard', () => {
  let guard: CompanyGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CompanyGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
