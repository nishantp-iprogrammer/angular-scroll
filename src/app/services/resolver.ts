import { DataService } from './data.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ResponseModel } from './../models/data_response';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()

export class RouteResolver implements Resolve<ResponseModel[]>{

  constructor(
    private dataSrv: DataService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<ResponseModel[]> {
    return this.dataSrv.getDataList();
  }

}
