import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductComponent} from "./product/product.component";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {ProductService} from "../../service/product.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [ProductsComponent,
    ProductComponent,
    ProductCreateComponent,
    ProductEditComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductsModule {
}
