import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LogoComponent } from './logo/logo.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { SwitchComponent } from './main/switch/switch.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CabeceraComponent, LogoComponent, MainComponent, MenuComponent, SwitchComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports :[
    CabeceraComponent, MainComponent,
  ],
})
export class CoreModule { }
