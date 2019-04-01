import { TestBed } from '@angular/core/testing';

import { Event.ServiceService } from './event.service.service';

describe('Event.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Event.ServiceService = TestBed.get(Event.ServiceService);
    expect(service).toBeTruthy();
  });
});
