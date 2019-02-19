import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { AuthComponent } from './auth.component';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { NonAuthGuard } from '../guards/non-auth.guard';
import { AuthService } from '../providers/auth.service';
import { FormsModule } from '@angular/forms';

const childRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [NonAuthGuard],
    canActivateChild: [NonAuthGuard],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'prefix' },
      { path: 'login', component: LoginComponent },
      { path: 'forgetPass', component: ForgetpassComponent }
    ]
  }
];

@NgModule({
  declarations: [AuthComponent, LoginComponent, ForgetpassComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(childRoutes)
  ],
  exports: [RouterModule],
  providers: [NonAuthGuard, AuthService]
})
export class AuthModule {}
