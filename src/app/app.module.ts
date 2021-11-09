import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule, } from '@angular/material/icon';
import { HomepageModule } from './homepage/homepage.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './product/product.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MatIconModule,
  
    HomepageModule,
    HttpClientModule,
    ProductModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    
  
        
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
