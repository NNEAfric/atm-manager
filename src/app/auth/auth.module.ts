import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { AuthComponent } from './auth.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AuthComponent, LoginComponent, ForgetpassComponent],
  imports: [CommonModule, IonicModule]
})
export class AuthModule {}
