import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get<any>("http://localhost:3000/facility");
  }

  createFacility(facility): Observable<any> {
    return this.httpClient.post("http://localhost:3000/facility", facility);
  }

  findById(id: number): Observable<any> {
    return this.httpClient.get<any>("http://localhost:3000/facility/" + id);
  }

  updateFacility(id: number, facility: any): Observable<any> {
    return this.httpClient.put<any>("http://localhost:3000/facility/" + id, facility);
  }

  deleteFacility(id: number): Observable<any> {
    return this.httpClient.delete<any>("http://localhost:3000/facility/" + id);
  }

  searchFacility(value: string, value2: string): Observable<any> {
    return this.httpClient.get<any>("http://localhost:3000/facility?name_like=" + value + "&facility_type.name=" + value2);
  }
}
