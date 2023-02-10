import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from './component/product/product.component';
import {ProductCreateComponent} from './component/product-create/product-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ProductEditComponent} from './component/product-edit/product-edit.component';
import {DictionaryPageComponent} from './component/dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './component/dictionary-detail/dictionary-detail.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductCreateComponent,
    ProductEditComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
