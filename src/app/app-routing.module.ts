import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageLayoutComponent } from './homepage/homepage-layout/homepage-layout.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './product/cart/cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';




const routes: Routes = [
  {path: '', component:HomepageLayoutComponent},
  {path:'cart', component:CartComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignUpComponent},
  {path: 'allproducts', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
