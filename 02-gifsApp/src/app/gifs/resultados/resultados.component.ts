import { Component } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  constructor(private gifServe: GifsService) { }

  get resultados() { 
    return this.gifServe.resultados
  }

}
