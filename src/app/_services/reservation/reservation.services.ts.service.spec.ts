import { TestBed } from '@angular/core/testing';

import { ReservationServicesTsService } from './reservation.services';

describe('ReservationServicesTsService', () => {
  let service: ReservationServicesTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationServicesTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
