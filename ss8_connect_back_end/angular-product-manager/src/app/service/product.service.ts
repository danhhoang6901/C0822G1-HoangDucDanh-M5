import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get<any>("http://localhost:3000/products");
  }

  saveProduct(product): Observable<any> {
    return this.httpClient.post("http://localhost:3000/products", product);
  }


  findById(id: number) {
    return this.httpClient.get<any>("http://localhost:3000/products/" + id);
  }


  updateProduct(id: number, product: Product) {
    return this.httpClient.put<any>("http://localhost:3000/products/" + id, product);
  }


  deleteProduct(id: number) {
    return this.httpClient.delete<any>("http://localhost:3000/products/" + id);
  }

  searchProduct(value: string) {
    return this.httpClient.get<any>("http://localhost:3000/products?name_like=" + value);
  }

}
