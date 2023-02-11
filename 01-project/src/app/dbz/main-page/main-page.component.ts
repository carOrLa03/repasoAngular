import { Component } from '@angular/core';
import { Personaje } from '../interfaces/Personaje.interface';
import { DbzService } from '../servicios/dbz.service';

// interface Personaje { //creamos una interface
//   nombre: string;
//   poder: number;
// }

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  title: string = "Dragon Ball Z"

  nuevo: Personaje = { //creamos un objeto de tipo Personaje
    nombre: "",
    poder: 0
  }

  constructor(private dbzService: DbzService){}

  
  agregar() { 
      this.dbzService.agregarPersonaje(this.nuevo)

  }
}
