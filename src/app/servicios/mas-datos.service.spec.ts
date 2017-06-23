import { TestBed, inject } from '@angular/core/testing';

import { MasDatosService } from './mas-datos.service';

describe('MasDatosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasDatosService]
    });
  });

  it('should be created', inject([MasDatosService], (service: MasDatosService) => {
    expect(service).toBeTruthy();
  }));
});
