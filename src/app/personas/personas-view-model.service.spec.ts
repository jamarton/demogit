import { TestBed, inject } from '@angular/core/testing';

import { PersonasViewModelService } from './personas-view-model.service';

describe('PersonasViewModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonasViewModelService]
    });
  });

  it('should be created', inject([PersonasViewModelService], (service: PersonasViewModelService) => {
    expect(service).toBeTruthy();
  }));
});
