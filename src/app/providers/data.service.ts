import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Data, UserData, PaginatedData, ATMData } from '../app.models';
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

  getATMs(params?: {
    paginate?: number;
    page?: number;
  }): Observable<PaginatedData<ATMData>> {
    return this.httpClient.get<PaginatedData<ATMData>>(
      `${this.baseUrl}/managers/me/atms`,
      {
        params:
          params === undefined
            ? {}
            : {
                paginate: params.paginate.toString(),
                page: params.page.toString()
              }
      }
    );
  }
}
