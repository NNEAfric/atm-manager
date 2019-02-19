import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtmsComponent } from './atms/atms.component';
import { MainappComponent } from './mainapp.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AtmsComponent, MainappComponent],
  imports: [CommonModule, IonicModule.forRoot()]
})
export class MainappModule {}