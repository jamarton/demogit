import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import 'rxjs/Rx'; // Todos los operadores RxJS

@Injectable()
export class PersonasDAOService {
  private baseUrl = 'http://localhost:4321/personas';
  constructor(private http: Http) { }
  query(): Observable<any> {
    return this.http.get(this.baseUrl).map(response => response.json());
  }
  get(id: number) {
    return this.http.get(this.baseUrl + '/' + id).map(response => response.json());
  }
  add(item: any) {
    return this.http.post(this.baseUrl, item).map(response => response.json());
  }
  change(item: any) {
    return this.http.put(this.baseUrl, item).map(response => response.json());
  }
  remove(id: number) {
    return this.http.delete(this.baseUrl + '/' + id).map(response => response.json());
  }
}
