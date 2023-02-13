import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {FacilityListComponent} from "./component/facility/facility-list/facility-list.component";
import {FacilityCreateComponent} from "./component/facility/facility-create/facility-create.component";
import {FacilityEditComponent} from "./component/facility/facility-edit/facility-edit.component";
import {CustomerListComponent} from "./component/customer/customer-list/customer-list.component";
import {CustomerCreateComponent} from "./component/customer/customer-create/customer-create.component";
import {CustomerEditComponent} from "./component/customer/customer-edit/customer-edit.component";
import {ContractListComponent} from "./component/contract/contract-list/contract-list.component";


const routes: Routes = [{
  path: "", component: HomeComponent
}, {
  path: "facility/list", component: FacilityListComponent
}, {
  path: "facility/create", component: FacilityCreateComponent
}, {
  path: "facility/edit/:id", component: FacilityEditComponent
}, {
  path: "customer/list", component: CustomerListComponent
}, {
  path: "customer/create", component: CustomerCreateComponent
}, {
  path: "customer/edit/:id", component: CustomerEditComponent,
}, {
  path: "contract/list", component: ContractListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
