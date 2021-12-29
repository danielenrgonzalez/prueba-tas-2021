import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
})
export class StoreComponent implements OnInit {

 products:any[]=[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
   this.productService.getProducts().subscribe(resp => {
    this.products=resp;
    console.log(this.products);
  });
  }

}
