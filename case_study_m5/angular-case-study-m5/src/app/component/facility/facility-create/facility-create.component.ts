import {Component, OnInit} from '@angular/core';
import {RentType} from "../../../model/rent-type";
import {RentTypeService} from "../../../service/rent-type.service";
import {FacilityType} from "../../../model/facility-type";
import {FacilityTypeService} from "../../../service/facility-type.service";
import {FacilityService} from "../../../service/facility.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
      name: new FormControl("", [Validators.required, Validators.pattern("([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}")]),
      area: new FormControl("", [Validators.required]),
      cost: new FormControl("", [Validators.required]),
      maxPeople: new FormControl("", [Validators.required]),
      standardRoom: new FormControl("", [Validators.required]),
      descriptionOtherConvenience: new FormControl("", [Validators.required]),
      poolArea: new FormControl("", [Validators.required, Validators.min(0)]),
      numberOfFloors: new FormControl("", [Validators.required, Validators.min(0)]),
      facilityFree: new FormControl("", [Validators.required]),
      facilityType: new FormControl("", [Validators.required]),
      rentType: new FormControl("", [Validators.required])
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
    if (this.facilityForm.valid) {
      const facility = this.facilityForm.value;
      this.facilityService.createFacility(facility).subscribe(next => {
        alert("Successfully added new");
        this.router.navigateByUrl("/facility/list")
      })
    }
  }
}
