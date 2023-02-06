import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './compoment/home/home.component';
import { HeaderComponent } from './compoment/header/header.component';
import { NavbarComponent } from './compoment/navbar/navbar.component';
import { FooterComponent } from './compoment/footer/footer.component';
import { FacilityComponent } from './compoment/facility/facility.component';
import { FacilityListComponent } from './compoment/facility-list/facility-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    FacilityComponent,
    FacilityListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
