import { Injectable,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit{

  constructor(
    private http : HttpClient
  ) { }
  ngOnInit(): void {
  }

  getAllProducts(){
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
