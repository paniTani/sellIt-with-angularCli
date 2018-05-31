import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { DataProductService } from '../data-product-list.service';
import { ProductsList } from '../products-list.model';

// import { DataProductListService } from '../data-product-list.service';
// import { ProductsList } from '../products-list';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['product-list.component.scss'],
  providers: [ DataProductService ]
  // providers: [DataProductListService]
})
//
export class ProductList implements OnInit {
  // public name:string = 'Bob';

  public productList: ProductsList[] = [];

  constructor(
    // private http: HttpClient,
    private dataProductService: DataProductService
  ){ }

  ngOnInit() {
    this.dataProductService.getProducts().subscribe((res: ProductsList[]) => {
      this.productList = res;
      console.log(this.productList);
    });
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }
}
