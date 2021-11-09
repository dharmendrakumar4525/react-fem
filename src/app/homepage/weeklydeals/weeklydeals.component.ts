import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'weeklydeals',
  templateUrl: './weeklydeals.component.html',
  styleUrls: ['./weeklydeals.component.css']
})
export class WeeklydealsComponent implements OnInit {

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
