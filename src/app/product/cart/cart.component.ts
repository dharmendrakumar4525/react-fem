import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number  ;
  constructor(private productService : ProductsService) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(res=>{
      this.products = res ;
      this.grandTotal = this.productService.getTotalPrice();
    })
  }

  removeItem(item: any){
    this.productService.removeCartItem(item);

  }


}
