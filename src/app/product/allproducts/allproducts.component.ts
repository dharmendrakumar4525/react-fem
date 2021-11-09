import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { Product } from '../product';

@Component({
  selector: 'allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  
   productItem: any=[];
  
  constructor(private productsService: ProductsService) { 
   
    
  }

  ngOnInit(): void {

   

     this.productsService.getProduct().subscribe(data=>{
      this.productItem=data;
      
    })
  }

}
