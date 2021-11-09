import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  getProduct(){
    return this.http.get<any>("https://familyemart.com/wp-json/wc/v3/products?consumer_key=ck_d84c983cc68a3ecb8d18a0048ab414fc663e392a&consumer_secret=cs_0e0781bb30e396c9ff3814b45391a966615fddd9")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
