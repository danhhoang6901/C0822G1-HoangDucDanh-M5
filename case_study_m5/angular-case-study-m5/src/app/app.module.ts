import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home.component';
import {HeaderComponent} from './component/header/header.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {FooterComponent} from './component/footer/footer.component';
import {FacilityListComponent} from './component/facility/facility-list/facility-list.component';
import {FacilityEditComponent} from './component/facility/facility-edit/facility-edit.component';
import {FacilityCreateComponent} from './component/facility/facility-create/facility-create.component';
import {CustomerListComponent} from './component/customer/customer-list/customer-list.component';
import {CustomerEditComponent} from './component/customer/customer-edit/customer-edit.component';
import {CustomerCreateComponent} from './component/customer/customer-create/customer-create.component';
import {ContractListComponent} from './component/contract/contract-list/contract-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    FacilityListComponent,
    FacilityEditComponent,
    FacilityCreateComponent,
    CustomerListComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    ContractListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
