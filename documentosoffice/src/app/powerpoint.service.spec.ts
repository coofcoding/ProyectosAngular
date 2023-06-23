import { TestBed } from '@angular/core/testing';

import { PowerpointService } from './powerpoint.service';

describe('PowerpointService', () => {
  let service: PowerpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowerpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
