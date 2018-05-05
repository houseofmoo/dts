import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { BoothRates } from '../exhibitor-data/booth';
import { ApiConfigs } from '../../config/api-configs';

@Injectable()
export class BoothRateService {

  constructor(private _http: HttpClient,
    private _apiConfig: ApiConfigs) { }

  getBoothRates(): Observable<BoothRates> {
    return this._http.get<BoothRates>(this._apiConfig.boothRateApi)
      .catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse): Observable<BoothRates> {
    console.log('ERROR in exhibitors service: ' + error.message);
    return Observable.throw(error);
  }

  saveBoothRates(boothRates: BoothRates): Observable<Object> {
    const payload = JSON.stringify(boothRates);
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(this._apiConfig.boothRateApi, payload, { headers: header });
  }
}
