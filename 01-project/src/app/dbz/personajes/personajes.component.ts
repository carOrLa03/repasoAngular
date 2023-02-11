import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/Personaje.interface';
import { DbzService } from '../servicios/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent {

  constructor(private dbzService: DbzService) {}

  get personajes(): Personaje[] {
    return this.dbzService.personaje
   }


}