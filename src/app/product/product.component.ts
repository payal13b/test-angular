import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product-model';
import{PRODUCTS} from './mockdata';
//import{ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  //styleUrls: ['./app.component.css']
})

export class ProductComponent implements OnInit {
  products:ProductModel[];
  changeFilterData: any;
  constructor() { }

  ngOnInit() {
    this.products = PRODUCTS
  }

   changeProducts(event){
    let selectedValue = event.target.value;
    var index = this.products.findIndex(prod => prod.name === selectedValue);
    //this.changeFilterData.push(this.products[index]);
    this.changeFilterData = this.products[index];
   }
}