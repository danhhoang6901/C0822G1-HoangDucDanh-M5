import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  msg = "";
  temp: Product = {};

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.products = this.productService.getAll();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.msg = "Xóa thành công"
  }
}
