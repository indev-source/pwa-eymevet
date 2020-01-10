import { TestBed } from '@angular/core/testing';

import { ProductServerService } from './product-server.service';

describe('ProductServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductServerService = TestBed.get(ProductServerService);
    expect(service).toBeTruthy();
  });
});
