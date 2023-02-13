import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private httpClient: HttpClient) {
  }
  getAll(): Observable<any>{
    return this.httpClient.get<any>("http://localhost:3000/customerType")
  }
}
