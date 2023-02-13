import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../service/customer.service";
import {CustomerType} from "../../../model/customer-type";
import {CustomerTypeService} from "../../../service/customer-type.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup;
  customerType: CustomerType[] = [];

  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService, private router: Router) {
    this.customerForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl("", [Validators.required, Validators.pattern("([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}")]),
      dateOfBirth: new FormControl("", [Validators.required]),
      gender: new FormControl("0", [Validators.required]),
      idCard: new FormControl("", [Validators.required, Validators.pattern("\\d{9,12}")]),
      phoneNumber: new FormControl("", [Validators.required, Validators.pattern("[0][9][0][0-9]{7}")]),
      email: new FormControl("", [Validators.required, Validators.pattern("\\w{5,20}@gmail.com")]),
      address: new FormControl("", [Validators.required]),
      customerType: new FormControl("", [Validators.required])
    });
    this.customerTypeService.getAll().subscribe(next => {
      this.customerType = next;
    })
  }

  ngOnInit(): void {
  }

  createCustomer() {
    const customer = this.customerForm.value;
    this.customerForm.value.gender = parseInt(this.customerForm.value.gender);
    this.customerService.createCustomer(customer).subscribe(next => {
      alert("Successfully added new");
      this.router.navigateByUrl("/customer/list")
    })
  }
}
