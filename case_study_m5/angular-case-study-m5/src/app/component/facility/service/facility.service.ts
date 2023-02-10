import {Injectable} from '@angular/core';
import {Facility} from "../model/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList: Facility[] = [
    {
      id: 1,
      name: "Villa Beach Front",
      area: 25000,
      cost: 1000000,
      maxPeople: 10,
      standardRoom: "vip",
      descriptionOtherConvenience: "Có hồ bơi",
      poolArea: 500,
      numberOfFloors: 4,
      facilityType: {
        id: 1,
        name: "Villa"
      },
      rentType: {
        id: 3,
        name: "Day"
      }
    },
    {
      id: 2,
      name: "House Princess 01",
      area: 14000,
      cost: 5000000,
      maxPeople: 7,
      standardRoom: "vip",
      descriptionOtherConvenience: "Có thêm bếp nướng",
      numberOfFloors: 3,
      facilityType: {
        id: 2,
        name: "House"
      },
      rentType: {
        id: 2,
        name: "Month"
      }
    }
  ];

  constructor() {
  }

  getAll() {
    return this.facilityList;
  }

  findById(id: number) {
    let result = this.facilityList.filter(element => element.id === id);
    return result[0];
  }

  updateFacility(id: number, facility: any) {
    for (let i = 0; i < this.facilityList.length; i++) {
      if (this.facilityList[i].id === id) {
        this.facilityList[i] = facility;
      }
    }
  }
}
