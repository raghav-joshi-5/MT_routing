import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  prodObj!: Iproduct[];
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this._productService.fetchallproduct().subscribe((s) => {
      this.prodObj = s;
    });
  }
}
