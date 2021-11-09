import { Component } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fem';

  
  public totalItem : number = 0 ; 

  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res=>{
      this.totalItem = res.length;
    })
  }
}
