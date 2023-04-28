import { Component } from '@angular/core';
import { Planta } from './planta';
import { ListaPlantaService } from './lista-planta.service';

@Component({
  selector: 'app-lista-planta',
  templateUrl: './lista-planta.component.html',
  styleUrls: ['./lista-planta.component.css']
})
export class ListaPlantaComponent {

  plantas: Array<Planta> = [];

  constructor(private listaPlantaService: ListaPlantaService) { }

  getPlantas() {
    this.listaPlantaService.getPlantas().subscribe(plantas => {
      this.plantas = plantas;
    });
  }

  ngOnInit(): void {
    this.getPlantas();
  }

}
