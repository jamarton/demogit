import { TestBed, inject } from '@angular/core/testing';

import { PersonasDAOService } from './personas-dao.service';

describe('PersonasDAOService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonasDAOService]
    });
  });

  it('should be created', inject([PersonasDAOService], (service: PersonasDAOService) => {
    expect(service).toBeTruthy();
  }));
});
