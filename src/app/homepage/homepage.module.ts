import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomepageLayoutComponent } from './homepage-layout/homepage-layout.component';
import { ShopbycategoryComponent } from './shopbycategory/shopbycategory.component';
import { MatIconModule } from '@angular/material/icon';
import { ToppickforyouComponent } from './toppickforyou/toppickforyou.component';
import { AllproductsComponent } from '../product/allproducts/allproducts.component';
import { ProductModule } from '../product/product.module';
import { WeeklydealsComponent } from './weeklydeals/weeklydeals.component';
import { OffersComponent } from './offers/offers.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { DailyrequirmentsComponent } from './dailyrequirments/dailyrequirments.component';
import { DryfruitsdealsComponent } from './dryfruitsdeals/dryfruitsdeals.component';




@NgModule({
  declarations: [
    HomeBannerComponent,
    HomepageLayoutComponent,
    ShopbycategoryComponent,
    ToppickforyouComponent,
    WeeklydealsComponent,
    OffersComponent,
    TestimonialComponent,
    DailyrequirmentsComponent,
    DryfruitsdealsComponent,
   
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ProductModule,
    
    
    
  ]
})
export class HomepageModule { }
