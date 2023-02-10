import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  temp: Product = {};
  category: Category[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService) {
    this.productService.getAll().subscribe(next => {
      this.products = next;
    });
    this.categoryService.getAll().subscribe(next => {
      this.category = next;
    })
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(next => {
      this.products = next;
    })
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(next => {
      this.products = next;
      alert("Xóa thành công")
      this.ngOnInit();
    });
  }

  searchName(value: string) {
    this.productService.searchProduct(value).subscribe(next => {
      this.products = next;
    })
  }
}
