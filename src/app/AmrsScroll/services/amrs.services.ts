
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MsgSlack } from '../domain/amrs';
// 0mport { Msg } from '../domain/amrs';
// const url = 'http://localhost:3000/messages';
const BASE_URL = 'http://localhost:8000/slackmessages/1000/1501770200.477992';


@Injectable()
export class AmrsService {

    constructor(private http: Http) {
    }
    getScrollMessages(): Observable<any> {
        return this.http.get(BASE_URL)
        .map(res => res.json())
        // errors if any
        .catch((error: any) => Observable.throw(error.json.error || 'Server error'));
    }
}
