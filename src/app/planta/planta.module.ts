import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPlantaComponent } from './lista-planta/lista-planta.component';

@NgModule({
  declarations: [
    ListaPlantaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ListaPlantaComponent],
})
export class PlantaModule { }
