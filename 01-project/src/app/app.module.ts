import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contadores/contador/contador.component';
// import { HeroeComponent } from './herores/heroe/heroe.component';
// import { ListaComponent } from './herores/lista/lista.component';
import { HeroresModule } from './herores/herores.module';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,

  ],
  imports: [
    BrowserModule,
    HeroresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
