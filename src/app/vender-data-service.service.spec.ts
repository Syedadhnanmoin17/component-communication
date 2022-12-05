import { TestBed } from '@angular/core/testing';

import { VenderDataServiceService } from './vender-data-service.service';

describe('VenderDataServiceService', () => {
  let service: VenderDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VenderDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
