import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';


@Component({
  selector: 'toppickforyou',
  templateUrl: './toppickforyou.component.html',
  styleUrls: ['./toppickforyou.component.css']
})
export class ToppickforyouComponent implements OnInit {

  productItem:any=[];
  images:any=[];
  constructor(private productsService: ProductsService) { 
    let productdata = this.productsService.getProduct().subscribe(data=>{
      this.productItem=data;
      
    })
   
    
    
  }

  ngOnInit(): void {
  }

}
