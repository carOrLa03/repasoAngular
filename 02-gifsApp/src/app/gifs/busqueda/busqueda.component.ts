import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>; 
  //ponemos el elemento que quieran buscar (en este caso nos interesa) poner la referencia local
  //como en la instalación de Angular pusimos que fuera superrestrictivo
  //le tenemos que poner el signo de exclamación "!" (indica que no es nulo)
  //más info en non-null aaertion operator en la docu oficial de TS

  constructor(private gifServe: GifsService) { }

  buscar() { 
    //vemos que en el console.log de la app nos aparece
    //ElementRef {nativeElement: input.form-control} este ya es el elemento HTML
    console.log(this.txtBuscar)
    const valor = this.txtBuscar.nativeElement.value
    
    this.gifServe.buscarGifs(valor)
    
    // le damos el valor de string vacio para que borre el contenido del elemento
    this.txtBuscar.nativeElement.value = ""; 
  }

}
