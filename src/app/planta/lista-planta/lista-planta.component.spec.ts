import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlantaComponent } from './lista-planta.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';
import { Planta } from './planta';

describe('ListaPlantaComponent', () => {
  let component: ListaPlantaComponent;
  let fixture: ComponentFixture<ListaPlantaComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListaPlantaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPlantaComponent);
    component = fixture.componentInstance;
    component.plantas = [
      new Planta(1,faker.name.firstName(),"","",3,"",""),
      new Planta(2,faker.name.firstName(),"","",3,"",""),
      new Planta(3,faker.name.firstName(),"","",3,"",""),
    ]
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create lista planta', () => {
    expect(component).toBeTruthy();
  });

  it('should have a <div.banner> element', () => {
    expect(debug.queryAll(By.css('.banner'))).toHaveSize(1)
  });

  it('should have a <table> element', () => {
    expect(debug.queryAll(By.css('.table'))).toHaveSize(1)
  });

  it('should have 4 <thead.table-dark> element', () => {
    expect(debug.queryAll(By.css('.table-dark'))).toHaveSize(1)
  });

  it('should have the correct information nombre comun', () => {
    debug.queryAll(By.css('table-item-name')).forEach((td, i)=>{
      expect(td.attributes['name']).toEqual(
        component.plantas[i].nombre_comun)
    })
  });

  it('should have the correct information tipo', () => {
    debug.queryAll(By.css('table-item-name')).forEach((td, i)=>{
      expect(td.attributes['name']).toEqual(
        component.plantas[i].tipo)
    })
  });

  it('should have the correct information clima', () => {
    debug.queryAll(By.css('table-item-name')).forEach((td, i)=>{
      expect(td.attributes['name']).toEqual(
        component.plantas[i].clima)
    })
  });

  it('should have the correct headers', () => {
    expect(debug.queryAll(By.css('.table-header'))).toHaveSize(3)
  });
});
