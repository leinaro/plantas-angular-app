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

}
