import {Component, OnInit} from '@angular/core';
import {RentType} from "../model/rent-type";
import {RentTypeService} from "../service/rent-type.service";
import {FacilityType} from "../model/facility-type";
import {FacilityTypeService} from "../service/facility-type.service";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  rentTypeList: RentType[] = [];
  facilityTypeList: FacilityType[] = [];

  constructor(private rentTypeService: RentTypeService, private facilityTypeService: FacilityTypeService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.getFacilityTypeAll();
  }

  getAll() {
    this.rentTypeList = this.rentTypeService.getAll();
  }

  getFacilityTypeAll() {
    this.facilityTypeList = this.facilityTypeService.getAll();
  }
}
