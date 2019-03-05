import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LogoComponent } from './logo/logo.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [CabeceraComponent, LogoComponent, MainComponent, MenuComponent],
  imports: [
    CommonModule
  ],
  exports :[
    CabeceraComponent, MainComponent,
  ],
})
export class CoreModule { }
