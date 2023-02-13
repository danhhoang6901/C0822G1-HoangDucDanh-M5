import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get<any>("http://localhost:3000/customer");
  }

  createCustomer(customer): Observable<any> {
    return this.httpClient.post("http://localhost:3000/customer", customer);
  }

  findById(id: number): Observable<any> {
    return this.httpClient.get<any>("http://localhost:3000/customer/" + id);
  }

  updateCustomer(id: number, customer: any): Observable<any> {
    return this.httpClient.put<any>("http://localhost:3000/customer/" + id, customer);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.httpClient.delete<any>("http://localhost:3000/customer/" + id);
  }
}
