import { TestBed } from '@angular/core/testing';

import { AddRideService } from './add-ride.service';

describe('AddRideService', () => {
  let service: AddRideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddRideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
