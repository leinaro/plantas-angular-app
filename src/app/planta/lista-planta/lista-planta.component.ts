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
  interior : number = 0
  exterior : Number = 0

  constructor(private listaPlantaService: ListaPlantaService) { }

  getPlantas() {
    this.listaPlantaService.getPlantas().subscribe(plantas => {
      this.plantas = plantas;
      this.contarPlantas(plantas)
    });
  }

  contarPlantas(plantas: Array<Planta>) {
    var interior = 0
    var exterior = 0
    plantas.forEach(function(p){
      if(p.tipo == "Interior"){
        interior++;
      }
      if(p.tipo == "Exterior"){
        exterior++;
      }
    })
    this.interior = interior;
    this.exterior = exterior;
  }

  ngOnInit(): void {
    this.getPlantas();
  }

}
