import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {Product } from './product/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public cartItemList : any = []
  public productList = new BehaviorSubject<any>([]);
  
  constructor(private http:HttpClient){ }
  
  getProduct(){
    let apiurl = "https://familyemart.com/wp-json/wc/v3/products?consumer_key=ck_d84c983cc68a3ecb8d18a0048ab414fc663e392a&consumer_secret=cs_0e0781bb30e396c9ff3814b45391a966615fddd9";

    return this.http.get(apiurl);
  }

  
  viewProduct(productId: number){
    let apiurl1 = "https://familyemart.com/wp-json/wc/v3/products?consumer_key=ck_d84c983cc68a3ecb8d18a0048ab414fc663e392a&consumer_secret=cs_0e0781bb30e396c9ff3814b45391a966615fddd9"+productId;
    console.log("productID" + productId);
    return this.http.get(apiurl1);
  }


  byCategoryProduct(categoryId: any)
  {
    let apiurl3 = "https://familyemart.com/wp-json/wc/v3/products?consumer_key=ck_d84c983cc68a3ecb8d18a0048ab414fc663e392a&consumer_secret=cs_0e0781bb30e396c9ff3814b45391a966615fddd9"+categoryId;

    return this.http.get(apiurl3);
  }


  ////darshancode

  getProducts(){
    return this.productList.asObservable();
  }

  setProducts(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice() : number {
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
       let b = parseInt(a.total);
      console.log(a);
      grandTotal += b;
    })
    return grandTotal;
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any , index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      } 
    })
    this.productList.next(this.cartItemList);
  }

   
 }
