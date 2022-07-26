import { TestBed } from '@angular/core/testing';

import { CustomersGuardGuard } from './customers-guard.guard';

describe('CustomersGuardGuard', () => {
  let guard: CustomersGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CustomersGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
