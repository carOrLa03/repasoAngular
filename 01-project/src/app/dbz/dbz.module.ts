import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { DbzService } from './servicios/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
