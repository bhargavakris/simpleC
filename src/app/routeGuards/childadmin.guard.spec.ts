import { TestBed } from '@angular/core/testing';

import { ChildadminGuard } from './childadmin.guard';

describe('ChildadminGuard', () => {
  let guard: ChildadminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChildadminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
