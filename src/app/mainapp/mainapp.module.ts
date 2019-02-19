import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtmsComponent } from './atms/atms.component';
import { MainappComponent } from './mainapp.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from '../guards/auth.guard';
import { AuthService } from '../providers/auth.service';
import { DataService } from '../providers/data.service';

const childRoutes: Routes = [
  {
    path: '',
    component: MainappComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
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
  exports: [RouterModule],
  providers: [AuthGuard, AuthService, DataService]
})
export class MainappModule {}
