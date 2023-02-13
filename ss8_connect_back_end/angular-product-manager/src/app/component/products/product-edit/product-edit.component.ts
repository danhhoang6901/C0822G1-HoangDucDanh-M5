import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/category";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  msg = "";
  category: Category[] = [];

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router, private categoryService: CategoryService) {
    this.activatedRoute.paramMap.subscribe(next => {
      this.id = +next.get('id')
      this.getProduct(this.id);
      this.categoryService.getAll().subscribe(next => {
        this.category = next;
      })
    });
  }

  ngOnInit(): void {
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(next => {
      this.productForm = new FormGroup({
        id: new FormControl(next.id),
        name: new FormControl(next.name),
        price: new FormControl(next.price),
        description: new FormControl(next.description),
        category: new FormControl(next.category)
      })
    });
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product).subscribe(next => {
      alert("Cập nhật thành công");
      this.router.navigateByUrl("")
    });
  }

  compareFun(item1, item2) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }
}
