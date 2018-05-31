import {Injectable} from '@angular/core';
import {ProductsList} from './products-list.model'
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// import { Component, OnInit } from '@angular/core';

@Injectable ()

export class DataProductService {

  products: ProductsList[];

  constructor( private http: HttpClient ){ }
  public getProducts() {
    return this.http.get('http://light-it-04.tk/api/adverts/')
      .pipe(

        map(((response: any) => {
          let results: ProductsList[] = [];
          // console.log(response.results[0]);
          // response.results.forEach(item => results.push(new ProductsList(item)));
          response.results.forEach(item => results.push(new ProductsList(item)));
          console.log(results);
          return results;
        }))
      );
  }
  /*public getUsersList() {
    return this.http.get('/assets/users.json')
      .pipe(
        map((response => {
          let results: User[] = [];
          response.data.forEach(item => results.push(new User(item)));
          return results;
        }))
      );
  }*/



  /*ngOnInit(){

    this.http.get('user.json').subscribe((data:User) => this.user=data);
  }*/

}





// import { ProductsList } from 'products-list';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
//
// export class DataProductListService {
//
//   private _data:ProductsList[] = [
//     {
//       productTitle: 'Product 1',
//       productImg: 'clothes.jpg'
//     },
//     {
//       productTitle: 'Product 2',
//       productImg: 'clothing-shop.jpg'
//     },
//     {
//       productTitle: 'Product 3',
//       productImg: 'laptop2.jpg'
//     },
//     {
//       productTitle: 'Product 4',
//       productImg: 'laptop.jpg'
//     },
//     {
//       productTitle: 'Product 5',
//       productImg: 'clothes.jpg'
//     },
//     {
//       productTitle: 'Product 6',
//       productImg: 'clothing-shop.jpg'
//     },
//     {
//       productTitle: 'Product 7',
//       productImg: 'laptop2.jpg'
//     },
//     {
//       productTitle: 'Product 8',
//       productImg: 'laptop.jpg'
//     },
//     {
//       productTitle: 'Product 9',
//       productImg: 'clothes.jpg'
//     },
//     {
//       productTitle: 'Product 10',
//       productImg: 'clothing-shop.jpg'
//     },
//     {
//       productTitle: 'Product 11',
//       productImg: 'laptop2.jpg'
//     },
//     {
//       productTitle: 'Product 12',
//       productImg: 'laptop.jpg'
//     },
//   ];
//   getData():ProductsList[] {
//     return this._data;
//   }
//
//   // addData(title: string){
//   //   this.data.push({title});
//   // }
// }
//
