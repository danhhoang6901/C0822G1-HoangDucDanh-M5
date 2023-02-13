import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../service/customer.service";
import {Customer} from "../../../model/customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer[] = []
  temp: Customer = {};

  constructor(private customerService: CustomerService) {
    this.customerService.getAll().subscribe(next => {
      this.customer = next;
    })
  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(next => {
      this.customer = next;
    })
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(next => {
      this.customer = next;
      alert("Delete successfully");
      this.ngOnInit();
    })
  }
}
