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
  constructor(private ejercicioService:EjercicioService) {
    console.log("-----Componente Ejercicios CREADO---");
   }

  /***METODO SINCRONO***************************************
   * ejercicio:Ejercicio[] = creo el tipo de objeto ejercicio
   * getEjercicios():void = no devuelve nada
   *  this.ejercicios= donde voy a recibir los datos del servicio
   *  this.ejercicioService.getEjercicios();= Desde donde se obtienen los ejercicios
   */
  //getEjercicios_old():void{
  //  this.ejercicios=this.ejercicioService.getEjercicios();
  //}

  /**METODO ASINCRONO*******
   * this.ejercicioService.getEjercicios(): utilizo la funcion getEjercicios
   * a quien le solicito la coleccion de ejercicios.
   * .suscribe(): es por el modelo, o filosofia de RxJS.
   * ejercicios: se define el tipo en ejercicios:Ejercicio[].
   * =>this.ejercicios=ejercicios: paso la coleccion de ejercicios a ejercicios.
   */
  getEjercicios():void{
    this.ejercicioService.getEjercicios().subscribe(ejercicios=>this.ejercicios=ejercicios)
  }

 /**
  *  ngOnInit(): void= donde se utilizan los metodos con this
  *
    this.getEjercicios(); = utilizo el metodo getEjercicios
  */
  ngOnInit(): void {
    console.log("---Componente Ejercicios[ngOnInit]---");
    this.getEjercicios();

  }
  onSelectEjercicio(ejercicio:Ejercicio):void{
    console.log("Ejercicio seleccionado="+ejercicio.id);
    this.ejercicioSeleccionado=ejercicio;
  }

}
