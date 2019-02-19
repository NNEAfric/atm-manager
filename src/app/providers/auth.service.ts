import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from '../app.models';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ACCESS_TOKEN_KEY } from '../app.module';

@Injectable()
export class AuthService {
  private baseUrl: string;

  constructor(
    @Inject('baseUrl') baseUrl: string,
    private httpClient: HttpClient,
    private jwtHelper: JwtHelperService
  ) {
    this.baseUrl = baseUrl;
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.httpClient
      .post<AuthResponse>(`${this.baseUrl}/managers/login`, {
        email,
        password
      })
      .pipe(
        map(result => {
          localStorage.setItem(ACCESS_TOKEN_KEY, result.token);
          return result;
        })
      );
  }

  async logout() {
    await localStorage.clear();
  }

  isTokenExpired(): boolean {
    return this.jwtHelper.isTokenExpired();
  }
}
