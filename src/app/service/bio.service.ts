import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Bio } from '../models/bio.model';
import { Update_Bio } from '../models/bio.model'
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class BioService {

  private API_PATH = 'https://bio-classify.herokuapp.com/api/v1/';

  constructor(private http: Http) { }

  getBio(): Observable<Bio> {
    return this.http.get(`${this.API_PATH}bio`)
      .map((res:Response) => res.json().data || [])
  }

  updateBio(data: Update_Bio) : any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.API_PATH}target/`, data, options)
  }
}