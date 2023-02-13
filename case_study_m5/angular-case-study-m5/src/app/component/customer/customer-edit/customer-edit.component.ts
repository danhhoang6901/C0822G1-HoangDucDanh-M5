import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../service/customer.service";
import {CustomerTypeService} from "../../../service/customer-type.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
        name: new FormControl(next.name, [Validators.required, Validators.pattern("([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}")]),
        dateOfBirth: new FormControl(next.dateOfBirth, [Validators.required]),
        gender: new FormControl("0", [Validators.required]),
        idCard: new FormControl(next.idCard, [Validators.required, Validators.pattern("\\d{9,12}")]),
        phoneNumber: new FormControl(next.phoneNumber, [Validators.required, Validators.pattern("[0][9][0][0-9]{7}")]),
        email: new FormControl(next.email, [Validators.required, Validators.pattern("\\w{5,20}@gmail.com")]),
        address: new FormControl(next.address, [Validators.required]),
        customerType: new FormControl(next.customerType, [Validators.required])
      })
    })
  }

  updateCustomer(id: number) {
    if (this.customerForm.valid) {
      const customer = this.customerForm.value;
      this.customerForm.value.gender = parseInt(this.customerForm.value.gender);
      this.customerService.updateCustomer(id, customer).subscribe(next => {
        alert("Update successful");
        this.router.navigateByUrl("/customer/list");
      })
    }
  }

  compareFun(item1, item2) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }

}
