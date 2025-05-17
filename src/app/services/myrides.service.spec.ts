import { TestBed } from '@angular/core/testing';

import { MyridesService } from './myrides.service';

describe('MyridesService', () => {
  let service: MyridesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyridesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
