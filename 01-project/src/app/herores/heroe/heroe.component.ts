import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent {
  title:string = "Trabajando con el componente Heroes"

  nombre:string  = "Black Widow"
  edad:number = 36

  obtenerNombre(){
    return `${this.nombre} ${this.edad}`
  }

  get nombreMayuscula(){
    return this.nombre.toUpperCase()
  }

  cambiarNombre(){
    this.nombre = "Spiderman"
  }
  cambiarEdad(){
    this.edad = 26
  }

}
