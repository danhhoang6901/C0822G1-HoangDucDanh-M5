import {Component, OnInit} from '@angular/core';
import {Contract} from "../model/contract";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[] = [{
    id: 1,
    startDate: "2020-12-08",
    endDate: "2020-12-08",
    customer: {
      id: 1,
      name: "Nguyễn Thị Hào",
    },
    facility: {
      id: 3,
      name: "Room Twin 01",
    }
  }, {
    id: 2,
    startDate: "2020-07-14",
    endDate: "2020-07-21",
    deposit: 200000,
    customer: {
      id: 3,
      name: "Trương Đình Nghệ",
    },
    facility: {
      id: 1,
      name: "Villa Beach Front",
    }
  }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
