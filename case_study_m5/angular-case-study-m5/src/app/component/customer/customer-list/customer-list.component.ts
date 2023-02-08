import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [{
    id: 1,
    name: "Nguyễn Thị Hào",
    dateOfBirth: "1970-11-07",
    gender: 0,
    idCard: "643431213",
    phoneNumber: "0945423362",
    email: "thihao07@gmail.com",
    address: "23 Nguyễn Hoàng, Đà Nẵng",
    customerType: {
      id: 5,
      name: "Member"
    }
  },
    {
      id: 2,
      name: "Phạm Xuân Diệu",
      dateOfBirth: "1992-08-08",
      gender: 1,
      idCard: "865342123",
      phoneNumber: "0954333333",
      email: "xuandieu92@gmail.com",
      address: "K77/22 Thái Phiên, Quảng Trị",
      customerType: {
        id: 3,
        name: "Gold"
      }
    }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
