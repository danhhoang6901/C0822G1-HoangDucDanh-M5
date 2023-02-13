import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../service/customer.service";
import {CustomerTypeService} from "../../../service/customer-type.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerType} from "../../../model/customer-type";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  id: number;
  customerType: CustomerType[] = [];

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute, private customerTypeService: CustomerTypeService, private router: Router) {
    this.activatedRoute.paramMap.subscribe(next => {
      this.id = +next.get("id");
      this.getCustomer(this.id);
      this.customerTypeService.getAll().subscribe(next => {
        this.customerType = next;
      })
    })
  }

  ngOnInit(): void {
  }

  getCustomer(id: number) {
    this.customerService.findById(id).subscribe(next => {
      this.customerForm = new FormGroup({
        id: new FormControl(next.id),
        name: new FormControl(next.name),
        dateOfBirth: new FormControl(next.dateOfBirth),
        gender: new FormControl(next.gender),
        idCard: new FormControl(next.idCard),
        phoneNumber: new FormControl(next.phoneNumber),
        email: new FormControl(next.email),
        address: new FormControl(next.address),
        customerType: new FormControl(next.customerType)
      })
    })
  }

  updateCustomer(id: number) {
    const customer = this.customerForm.value;
    this.customerForm.value.gender = parseInt(this.customerForm.value.gender);
    this.customerService.updateCustomer(id, customer).subscribe(next => {
      alert("Update successful");
      this.router.navigateByUrl("/customer/list");
    })
  }

  compareFun(item1, item2) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }

}
