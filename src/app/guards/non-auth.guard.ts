import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Injectable()
export class NonAuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private authSvc: AuthService) {}

  canActivate() {
    if (this.authSvc.isTokenExpired()) {
      return true;
    }

    // logged in so redirect to home page
    this.router.navigate(['/mainapp/atms']);
    return false;
  }

  canActivateChild() {
    if (this.authSvc.isTokenExpired()) {
      return true;
    }

    // logged in so redirect to home page
    this.router.navigate(['/mainapp/atms']);
    return false;
  }
}
