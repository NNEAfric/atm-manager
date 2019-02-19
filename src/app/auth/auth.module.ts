import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { AuthComponent } from './auth.component';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

const childRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'prefix' },
      { path: 'login', component: LoginComponent },
      { path: 'forgetPass', component: ForgetpassComponent }
    ]
  }
];

@NgModule({
  declarations: [AuthComponent, LoginComponent, ForgetpassComponent],
  imports: [CommonModule, IonicModule, RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class AuthModule {}
