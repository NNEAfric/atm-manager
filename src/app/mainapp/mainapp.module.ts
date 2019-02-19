import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtmsComponent } from './atms/atms.component';
import { MainappComponent } from './mainapp.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';

const childRoutes: Routes = [
  {
    path: '',
    component: MainappComponent,
    children: [
      { path: '', redirectTo: 'atms', pathMatch: 'prefix' },
      { path: 'atms', component: AtmsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'about', component: AboutComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AtmsComponent,
    MainappComponent,
    ProfileComponent,
    AboutComponent
  ],
  imports: [CommonModule, IonicModule, RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class MainappModule {}
