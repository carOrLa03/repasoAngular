import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifServe: GifsService){}

  //accedemos a la propiedad "historial" del servicio
  get gifs() { 
    return this.gifServe.historial 
  }

  buscar(item: string) { 
    return this.gifServe.buscarGifs(item)
  }

}
