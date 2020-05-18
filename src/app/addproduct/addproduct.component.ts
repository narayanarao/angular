import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  
  public product:Product;
  
  constructor() {
    this.product=new Product();
    this.product.productName="TV";
    this.product.productQuanity=1;
    this.product.productPrice=20000;
   }
    
  
  ngOnInit(): void {
  }

  insertProduct(p){
   console.log(p);
  }

}
