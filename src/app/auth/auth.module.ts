import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, ForgetpassComponent],
  imports: [CommonModule]
})
export class AuthModule {}
