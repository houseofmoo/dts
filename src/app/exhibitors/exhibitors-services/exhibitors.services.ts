import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import { Exhibitor } from '../exhibitor-data/exhibitor';

@Injectable()
export class ExhibitorService {
    private _serviceString: string = "http://localhost:58627/api/Exhibitors";

    constructor(private _http: HttpClient) { }

    getExhibitors(): Observable<Exhibitor[]> {
        return this._http.get<Exhibitor[]>(this._serviceString)
               .catch(this.handleError);
    }

    private handleError(error: HttpErrorResponse): Observable<Exhibitor[]> {
        console.log("ERROR in exhibitors service: " + error.message);
        return Observable.throw(error);
    }

    saveExhibitor(e: Exhibitor): Observable<Object> {
        let payload = JSON.stringify(e);
        let header = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.post(this._serviceString, payload, { headers: header });
    }
}