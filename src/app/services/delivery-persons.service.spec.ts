import { TestBed } from '@angular/core/testing';

import { DeliveryPersonsService } from './delivery-persons.service';

describe('DeliveryPersonsService', () => {
  let service: DeliveryPersonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryPersonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
