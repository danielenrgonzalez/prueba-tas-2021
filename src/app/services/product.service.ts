import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ProductModel } from "../models/product.model";
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 private url = 'https://my-json-server.typicode.com/TASNETWORK/Prueba-DJunior/';
  constructor(private http: HttpClient) { }

  getProducts() {
   return this.http.get(`${ this.url }/products`).pipe(map( this.crearArreglo ));

}

private crearArreglo( productsObj: object ) {

 const products: any[] = [];

 Object.keys( productsObj ).forEach( key => {
   const product = productsObj;
   products.push(product);
 });


 return products;

}
}
