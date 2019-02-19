import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Data, UserData } from '../app.models';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  private baseUrl: string;

  constructor(
    @Inject('baseUrl') baseUrl: string,
    private httpClient: HttpClient
  ) {
    this.baseUrl = baseUrl;
  }

  getMyAccount(): Observable<Data<UserData>> {
    return this.httpClient.get<Data<UserData>>(`${this.baseUrl}/managers/me`);
  }

  getATMs() {
    return this.httpClient.get(`${this.baseUrl}/managers/me/atms`);
  }
}
