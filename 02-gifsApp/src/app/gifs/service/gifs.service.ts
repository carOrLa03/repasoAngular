import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchGIFResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private key: string = "AC7PknJbIUyb88TbbJ0TCm5qOsf423T3";
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = []
  public resultados: Gif[] = []

  get historial() {
    //rompemos la referencia utilizando el operador SPREAD y devolver un nuevo array
    return [...this._historial]
  }

  //función que llamaremos desde nuestro componente de "búsqueda"
  buscarGifs(query: string) {
    if (query.trim().length === 0) return;

    if (!this._historial.includes(query.toLowerCase())) { // si no existe lo inserto
      //unshift inserta al inicio del array
      this._historial.unshift(query.toLowerCase())
          //limitamos la cantidad de inserciones en el historial a 10
      this._historial = this._historial.splice(0, 10)

      localStorage.setItem('historial', JSON.stringify(this._historial))
    };

    this.http.get<SearchGIFResponse>(`${this.servicioUrl}/search?api_key=${this.key}&q=${query}&limit=10`)
      .subscribe((res: any) => {
        
        this.resultados = res.data
        localStorage.setItem('resultados', JSON.stringify(this.resultados))

        console.log(res.data)
      })
  }

  constructor(private http: HttpClient) {

    if (localStorage.getItem("historial")) {
      this._historial = JSON.parse(localStorage.getItem("historial")!)
    }
    
    if (localStorage.getItem("resultados")) {
      this._historial = JSON.parse(localStorage.getItem("resultados")!)
     }
   }
}
