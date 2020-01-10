import { TestBed } from '@angular/core/testing';

import { CustomerServerService } from './customer-server.service';

describe('CustomerServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerServerService = TestBed.get(CustomerServerService);
    expect(service).toBeTruthy();
  });
});
