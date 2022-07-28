import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';

//services
import {StoreService} from '../../services/store.service'
import {ProductsService} from '../../services/products.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  total = 0;
  date = new Date(2003,5,1)
  myShoppingCart: Product[] = [];
  constructor(
    private storeService: StoreService,
    private productsService : ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
   }

  ngOnInit(): void {
    const result = this.productsService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  onAddToShoppingCart(product: Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}
