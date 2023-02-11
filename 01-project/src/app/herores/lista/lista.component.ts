import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  title:string = "Lista de Heroes"
  heroeBorrado: string = ""

  heroes: string[] = ['Thor', 'Ironman', 'Capitan América', 'Black Widow', 'Capitana Marvel', 'Ojo de halcón', 'Spiderman', 'Will', 'Rocket', 'Grut', 'Gamora', 'Hulk', 'Hulka']

  elementosBorrados: string[] = []

  borrarElemento(){
    this.heroeBorrado = "" + this.heroes.shift()
    
  }
  // borrarElemento(){
  //   let heBorrado = this.heroes.shift()
  //   this.elementosBorrados.push("" + heBorrado)
  // }
}
