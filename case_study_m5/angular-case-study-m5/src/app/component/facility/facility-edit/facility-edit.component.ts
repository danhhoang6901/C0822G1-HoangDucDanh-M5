import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FacilityService} from "../../../service/facility.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FacilityType} from "../../../model/facility-type";
import {RentType} from "../../../model/rent-type";
import {FacilityTypeService} from "../../../service/facility-type.service";
import {RentTypeService} from "../../../service/rent-type.service";
import {Facility} from "../../../model/facility";

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facilityForm: FormGroup;
  id: number;
  facilityType: FacilityType[] = [];
  rentType: RentType[] = [];
  facility: Facility[] = [];
  constructor(private facilityService: FacilityService, private activatedRoute: ActivatedRoute, private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService, private router: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
      this.id = +data.get("id");
      this.getFacility(this.id);
      this.facilityTypeService.getAll().subscribe(next => {
        this.facilityType = next;
      });
      this.rentTypeService.getAll().subscribe(next => {
        this.rentType = next;
      })
    })
  }

  ngOnInit(): void {
  }

  getFacility(id: number) {
    return this.facilityService.findById(id).subscribe(next => {
      this.facilityForm = new FormGroup({
        id: new FormControl(next.id),
        name: new FormControl(next.name),
        area: new FormControl(next.area),
        cost: new FormControl(next.cost),
        maxPeople: new FormControl(next.maxPeople),
        standardRoom: new FormControl(next.standardRoom),
        descriptionOtherConvenience: new FormControl(next.descriptionOtherConvenience),
        poolArea: new FormControl(next.poolArea),
        numberOfFloors: new FormControl(next.numberOfFloors),
        facilityFree: new FormControl(next.facilityFree),
        facilityType: new FormControl(next.facilityType),
        rentType: new FormControl(next.rentType)
      })
    });
  }

  updateFacility(id: number) {
    const facility = this.facilityForm.value;
    this.facilityService.updateFacility(id, facility).subscribe(next => {
      this.facility = next
      alert("Update successful");
      this.router.navigateByUrl("/facility/list");
    });
  }

  compareFun(item1, item2) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }
}
