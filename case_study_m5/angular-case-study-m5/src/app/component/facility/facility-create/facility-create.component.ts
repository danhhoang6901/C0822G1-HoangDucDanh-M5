import {Component, OnInit} from '@angular/core';
import {RentType} from "../../../model/rent-type";
import {RentTypeService} from "../../../service/rent-type.service";
import {FacilityType} from "../../../model/facility-type";
import {FacilityTypeService} from "../../../service/facility-type.service";
import {FacilityService} from "../../../service/facility.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  rentTypeList: RentType[] = [];
  facilityTypeList: FacilityType[] = [];
  facilityForm: FormGroup;

  constructor(private rentTypeService: RentTypeService, private facilityTypeService: FacilityTypeService, private facilityService: FacilityService, private router: Router) {
    this.facilityForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      area: new FormControl(),
      cost: new FormControl(),
      maxPeople: new FormControl(),
      standardRoom: new FormControl(),
      descriptionOtherConvenience: new FormControl(),
      poolArea: new FormControl(),
      numberOfFloors: new FormControl(),
      facilityFree: new FormControl(),
      facilityType: new FormControl(),
      rentType: new FormControl()
    });
    this.rentTypeService.getAll().subscribe(next => {
      this.rentTypeList = next
    });
    this.facilityTypeService.getAll().subscribe(next => {
      this.facilityTypeList = next;
    })
  }

  ngOnInit(): void {
  }

  createFacility() {
    const facility = this.facilityForm.value;
    this.facilityService.createFacility(facility).subscribe(next => {
      alert("Successfully added new");
      this.router.navigateByUrl("/facility/list")
    })
  }


}
