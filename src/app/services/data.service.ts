import { ResponseModel } from './../models/data_response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  checkLoggedIn() {
    try {
      const user = localStorage.getItem('email');
      if (typeof user === 'string') {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  getDataList(): Observable<ResponseModel[]> {
    return this.http.get<ResponseModel[]>('https://jsonplaceholder.typicode.com/photos').pipe(delay(1000));
  }
}
