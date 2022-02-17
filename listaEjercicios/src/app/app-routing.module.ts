import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';

/**
 * DEFINIMOS RUTAS
 * path: 'ejercicios': Nombre de Ruta.
 *  component:EjerciciosComponent: componente que se encarga de visualizar el template.
 * Esto permite:http://localhost:4200/ejercicios
 *
 */
const routes: Routes = [
  {path: 'ejercicios', component:EjerciciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/***
 * CREO RUTAS
 */
