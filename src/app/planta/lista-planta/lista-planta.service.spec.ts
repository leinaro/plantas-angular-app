import { TestBed } from '@angular/core/testing';

import { ListaPlantaService } from './lista-planta.service';

describe('ListaPlantaService', () => {
  let service: ListaPlantaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPlantaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
