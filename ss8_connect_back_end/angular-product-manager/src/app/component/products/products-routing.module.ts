import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductsComponent} from "./products.component";
import {ProductComponent} from "./product/product.component";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";


const routes: Routes = [{
  path: "", component: ProductsComponent, children: [
    {path: "", component: ProductComponent},
    {path: "create", component: ProductCreateComponent},
    {path: "edit/:id", component: ProductEditComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
