import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({ //decorador
    declarations: [
        HeroeComponent,
        ListaComponent
    ],
    exports: [
        ListaComponent,
        HeroeComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroresModule { }

