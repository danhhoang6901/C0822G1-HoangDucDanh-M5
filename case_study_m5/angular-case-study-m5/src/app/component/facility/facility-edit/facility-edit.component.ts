import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FacilityService} from "../service/facility.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facilityForm: FormGroup;
  id: number;
  msg: string;

  constructor(private facilityService: FacilityService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(data => {
      this.id = +data.get("id");
      const facility = this.getFacility(this.id);
      this.facilityForm = new FormGroup({
        id: new FormControl(facility.id),
        name: new FormControl(facility.name),
        area: new FormControl(facility.area),
        cost: new FormControl(facility.cost),
        maxPeople: new FormControl(facility.maxPeople),
        standardRoom: new FormControl(facility.standardRoom),
        descriptionOtherConvenience: new FormControl(facility.descriptionOtherConvenience),
        poolArea: new FormControl(facility.poolArea),
        numberOfFloors: new FormControl(facility.numberOfFloors),
        facilityFree: new FormControl(facility.facilityFree),
        facilityType: new FormControl(facility.facilityType),
        rentType: new FormControl(facility.rentType)
      })
    })
  }

  ngOnInit(): void {
  }

   getFacility(id: number) {
    return this.facilityService.findById(id);
  }

  updateFacility(id: number) {
    const facility = this.facilityForm.value;
    this.facilityService.updateFacility(id, facility);
    this.msg = "Update success";
  }
}
