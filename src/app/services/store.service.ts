import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import {BehaviorSubject} from 'rxjs';
import { Store } from '../models/store.model';

@Injectable({
  providedIn: 'root'
})

export class StoreService {
  total = 0;
  private myShoppingCart: Product[] = [];
  private store = new BehaviorSubject<Store>({
    cartItems: []
  });
  // private myCart = new BehaviorSubject<Product[]>([]);

  store$ = this.store.asObservable();

  constructor() { }

  addProduct(product: Product){
    this.myShoppingCart.push(product);
    this.store.next({...this.store,cartItems:this.myShoppingCart });
    console.log('store',this.store)
  }
  getTotal(){
    return this.myShoppingCart.reduce((a,c)=>
      a + c.price
    ,0)
  }
  getShoppingCart(){
    return this.myShoppingCart;
  }
}
