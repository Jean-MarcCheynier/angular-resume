import { TestBed } from '@angular/core/testing';

import { LevensteinDistanceService } from './levenstein-distance.service';

describe('LevensteinDistanceService', () => {
  let service: LevensteinDistanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevensteinDistanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
