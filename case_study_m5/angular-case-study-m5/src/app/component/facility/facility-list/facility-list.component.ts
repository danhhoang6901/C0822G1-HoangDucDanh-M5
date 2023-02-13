import {Component, OnInit} from '@angular/core';
import {Facility} from "../../../model/facility";
import {FacilityService} from "../../../service/facility.service";
import {FacilityType} from "../../../model/facility-type";
import {FacilityTypeService} from "../../../service/facility-type.service";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facility: Facility[] = [];
  temp: Facility = {};
  facilityType: FacilityType[] = [];

  constructor(private facilityService: FacilityService, private facilityTypeService: FacilityTypeService) {
    this.facilityService.getAll().subscribe(next => {
      this.facility = next;
    });
    this.facilityTypeService.getAll().subscribe(next => {
      this.facilityType = next;
    })


  }

  ngOnInit()
    :
    void {
    this.facilityService.getAll().subscribe(next => {
      this.facility = next;
    })
  }

  deleteFacility(id: number) {
    this.facilityService.deleteFacility(id).subscribe(next => {
      this.facility = next;
      alert("Delete successfully");
      this.ngOnInit();
    })
  }

  searchName(value: string, value2: string) {
    this.facilityService.searchFacility(value, value2).subscribe(next => {
      this.facility = next;
    })
  }
}
