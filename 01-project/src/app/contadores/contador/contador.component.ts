import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {


  uno:number = 1;
  resultado:number = 10;
  base:number = 5;
  cinco:number = 5;

  suma(){this.resultado += this.uno}
  resta(){this.resultado -= this.uno}

  suma5(){this.base += this.cinco}
  resta5(){this.base -= this.cinco}

}
