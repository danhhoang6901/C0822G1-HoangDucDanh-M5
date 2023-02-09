import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { ProductCreateComponent } from './component/product-create/product-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { ProductDeleteComponent } from './component/product-delete/product-delete.component';
import { DeleteConfirmationDailogComponent } from './component/delete-confirmation-dailog/delete-confirmation-dailog.component';
import { DictionaryPageComponent } from './component/dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './component/dictionary-detail/dictionary-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    DeleteConfirmationDailogComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
