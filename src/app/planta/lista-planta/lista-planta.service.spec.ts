import { TestBed } from '@angular/core/testing';

import { ListaPlantaService } from './lista-planta.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListaPlantaService', () => {
  let service: ListaPlantaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListaPlantaService]

    });
    service = TestBed.inject(ListaPlantaService);
  });

  it('planta service should be created', () => {
    expect(service).toBeTruthy();
  });
});
