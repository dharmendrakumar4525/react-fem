import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ViewproductdetailComponent } from './viewproductdetail/viewproductdetail.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductbycategoryComponent } from './productbycategory/productbycategory.component';


@NgModule({
  declarations: [
    ViewproductdetailComponent,
    AllproductsComponent,
    CartComponent,
    ProductbycategoryComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule
    
  ],
  exports: [AllproductsComponent, CartComponent]
})
export class ProductModule { }
