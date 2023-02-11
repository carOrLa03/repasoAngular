import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/Personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

 
  private _personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre: "Vageta",
      poder: 7500
    }
  ]

  constructor() { }

  get personaje(): Personaje[] { 
    return [...this._personajes]
  }

  agregarPersonaje(nuevo: Personaje) { 
    this._personajes.push(nuevo)
  }
}
