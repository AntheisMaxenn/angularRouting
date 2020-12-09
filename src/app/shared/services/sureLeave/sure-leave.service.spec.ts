import { TestBed } from '@angular/core/testing';

import { SureLeaveService } from './sure-leave.service';

describe('SureLeaveService', () => {
  let service: SureLeaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SureLeaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
