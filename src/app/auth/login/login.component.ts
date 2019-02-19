import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  _loading: boolean;
  _email = '';
  _password = '';

  _returnUrl: string;

  constructor(private _router: Router, private _route: ActivatedRoute, private _authSvc: AuthService) {}

  ngOnInit() {
    // get return url from route parameters or default to atms page
    this.returnUrl =
      this._route.snapshot.queryParams.returnUrl || '/mainapp/atms';
  }

  login() {
    this._authSvc
      .login(this._email, this._password)
      .toPromise()
      .then(res => this._router.navigateByUrl(this._returnUrl));
  }
}
