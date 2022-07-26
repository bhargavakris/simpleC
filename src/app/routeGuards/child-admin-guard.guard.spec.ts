import { TestBed } from '@angular/core/testing';

import { ChildAdminGuardGuard } from './child-admin-guard.guard';

describe('ChildAdminGuardGuard', () => {
  let guard: ChildAdminGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChildAdminGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
