import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-viewproductdetail',
  templateUrl: './viewproductdetail.component.html',
  styleUrls: ['./viewproductdetail.component.css']
})
export class ViewproductdetailComponent implements OnInit {
  productItem: any = [];
  productDetail: any = [];
  public productList : any ;
  constructor(private productsService: ProductsService, private api:ApiService) {


  }

  ngOnInit(): void {



    this.productsService.getProduct().subscribe

      (data => {


        this.productItem = data;
        
        this.productDetail = this.productItem.filter((product: any) => product.id == window.location.href.split('/')[window.location.href.split('/').length - 1].toString());
        console.log(this.productDetail, "productservice")
        this.productItem.map((product: any) => {
          console.log(product.id, window.location.href.split('/')[window.location.href.split('/').length - 1])
        })
      })
      
    
    }
    addtocart(item:any): void{
      this.productsService.addtoCart(item);
   

  }
  
   
}
