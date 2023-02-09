import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductComponent} from "./component/product/product.component";
import {ProductCreateComponent} from "./component/product-create/product-create.component";
import {ProductEditComponent} from "./component/product-edit/product-edit.component";
import {DictionaryPageComponent} from "./component/dictionary-page/dictionary-page.component";
import {DictionaryDetailComponent} from "./component/dictionary-detail/dictionary-detail.component";


const routes: Routes = [{
  path: "", component: ProductComponent
}, {path: "create", component: ProductCreateComponent}, {
  path: "edit/:id", component: ProductEditComponent
},{
  path: "dictionary",component: DictionaryPageComponent
},{
  path: "info/:id",component: DictionaryDetailComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
