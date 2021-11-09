import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ViewproductdetailComponent } from './viewproductdetail/viewproductdetail.component';

const routes: Routes = [
  {path: '', component:AllproductsComponent},
  {path: 'viewproductdetail/:id', component:ViewproductdetailComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
