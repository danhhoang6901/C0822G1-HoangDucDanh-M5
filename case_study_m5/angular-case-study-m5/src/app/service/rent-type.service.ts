import {Injectable} from '@angular/core';
import {RentType} from "../model/rent-type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {


  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get<any>("http://localhost:3000/rentType");
  }
}
