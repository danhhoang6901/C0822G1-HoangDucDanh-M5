import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
          name: new FormControl(next.name, [Validators.required, Validators.pattern("([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}")]),
          area: new FormControl(next.area, [Validators.required]),
          cost: new FormControl(next.cost, [Validators.required]),
          maxPeople: new FormControl(next.maxPeople, [Validators.required]),
          standardRoom: new FormControl(next.standardRoom, [Validators.required]),
          descriptionOtherConvenience: new FormControl(next.descriptionOtherConvenience, [Validators.required]),
          poolArea: new FormControl(next.poolArea, [Validators.required, Validators.min(0)]),
          numberOfFloors: new FormControl(next.numberOfFloors, [Validators.required, Validators.min(0)]),
          facilityFree: new FormControl(next.facilityFree, [Validators.required]),
          facilityType: new FormControl(next.facilityType, [Validators.required]),
          rentType: new FormControl(next.rentType, [Validators.required])
        })
      }
    );
  }

  updateFacility(id: number) {
    if (this.facilityForm.valid) {
      const facility = this.facilityForm.value;
      this.facilityService.updateFacility(id, facility).subscribe(next => {
        this.facility = next
        alert("Update successful");
        this.router.navigateByUrl("/facility/list");
      });
    }
  }

  compareFun(item1, item2) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }
}
