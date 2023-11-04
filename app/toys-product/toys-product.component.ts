import { Component } from '@angular/core';
import { ProductListService } from '../product-list.service';
class product{
  name:string | undefined;
  barcode!:number;
  age:number |undefined
  /**
   *
   */
  constructor(name:string ,
    barcode:number,
    age:number ) {
      this.barcode=barcode;
      this.name=name,
      this.age=age
  }
}
@Component({
  selector: 'app-toys-product',
  templateUrl: './toys-product.component.html',
  styleUrls: ['./toys-product.component.css']
})

export class ToysProductComponent {
  toysProduct: product[]= [ new product('saimon',78  ,8),new product('pikolo',89  ,10,),new product('monopol',74  ,99) ];

  constructor(private serv:ProductListService) {}
 
  func1(barkod:number){
   this.serv.add(barkod)
 
  }
  func2(barkod:number){
   this.serv.remove(barkod)
    }
}
