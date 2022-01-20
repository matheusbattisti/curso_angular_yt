import { TestBed } from '@angular/core/testing';

import { MomentService } from './moment.service';

describe('MomentService', () => {
  let service: MomentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MomentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
