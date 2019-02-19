import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtmsComponent } from './atms/atms.component';
import { MainappComponent } from './mainapp.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AtmsComponent, MainappComponent],
  imports: [RouterModule, CommonModule, IonicModule]
})
export class MainappModule {}
