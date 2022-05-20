import { TestBed } from '@angular/core/testing';

import { NogaurduserGuard } from './nogaurduser.guard';

describe('NogaurduserGuard', () => {
  let guard: NogaurduserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NogaurduserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
