import { Component, OnInit } from '@angular/core';
import { Ejercicio } from '../ejercicio';
//PASA A EJERCICIO.SERVICE.TS = import { EJERCICIOS } from '../collection-ejercicios';
import { EjercicioService } from '../ejercicio.service';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  //ejercicios=EJERCICIOS;

  ejercicios:Ejercicio[];
  ejercicioSeleccionado:Ejercicio;
  constructor(private ejercicioService:EjercicioService) { }

  /***
   * ejercicio:Ejercicio[] = creo el tipo de objeto ejercicio
   * getEjercicios():void = no devuelve nada
   *  this.ejercicios= donde voy a recibir los datos del servicio
   *  this.ejercicioService.getEjercicios();= Desde donde se obtienen los ejercicios
   */
  getEjercicios():void{
    this.ejercicios=this.ejercicioService.getEjercicios();
  }
 /**
  *  ngOnInit(): void= donde se utilizan los metodos con this
  *
    this.getEjercicios(); = utilizo el metodo getEjercicios
  */
  ngOnInit(): void {
    this.getEjercicios();

  }
  onSelectEjercicio(ejercicio:Ejercicio):void{
    console.log("Ejercicio seleccionado="+ejercicio.id);
    this.ejercicioSeleccionado=ejercicio;
  }

}
