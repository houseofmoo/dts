import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Exhibitor } from '../exhibitor-data/exhibitor';
import { exhibitorApi } from '../../../config/api-configs';

@Injectable()
export class ExhibitorService {

  constructor(private _http: HttpClient) { }

  getExhibitors(): Observable<Exhibitor[]> {
    return this._http.get<Exhibitor[]>(exhibitorApi)
      .catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse): Observable<Exhibitor[]> {
    console.log('ERROR in exhibitors service: ' + error.message);
    return Observable.throw(error);
  }

  saveExhibitor(e: Exhibitor): Observable<Object> {
    const payload = JSON.stringify(e);
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(exhibitorApi, payload, { headers: header });
  }
}
