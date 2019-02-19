import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtmsComponent } from './atms/atms.component';
import { MainappComponent } from './mainapp.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

const childRoutes: Routes = [
  {
    path: '',
    component: MainappComponent,
    children: [
      { path: '', redirectTo: 'atms', pathMatch: 'prefix' },
      { path: 'atms', component: AtmsComponent }
    ]
  }
];

@NgModule({
  declarations: [AtmsComponent, MainappComponent],
  imports: [CommonModule, IonicModule, RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class MainappModule {}
