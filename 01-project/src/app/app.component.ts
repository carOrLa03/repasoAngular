import { Component } from '@angular/core';

@Component({ //decorador
  selector: 'app-root', //app principal, en el index.html podemos ver este componente
  templateUrl: './app.component.html', // especifica el path donde se encuantra el HTML
  styleUrls: ['./app.component.scss'] //especifica el path donde se encuantra el SCSS
})
export class AppComponent {
  title:string = 'Contador APP';
}
