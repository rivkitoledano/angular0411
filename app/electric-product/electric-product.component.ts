import { Component } from '@angular/core';
import { ProductListService } from '../product-list.service';

class Product {
  name: string | undefined;
  barcode!: number ;
  yevouan: string | undefined;

  constructor(name: string, barcode: number, yevouan: string) {
    this.barcode = barcode;
    this.name = name;
    this.yevouan = yevouan;
  }
}

@Component({
  selector: 'app-electric-product',
  templateUrl: './electric-product.component.html',
  styleUrls: ['./electric-product.component.css']
})
export class ElectricProductComponent {
  electricProduct: Product[] = [
    new Product('computer', 25, 'yoav'),
    new Product('phone', 18, 'bil'),
    new Product('aircon', 95, 'meir')
  ];

  constructor(private serv: ProductListService) {}

  func1(barkod: number) {
    this.serv.add(barkod);
  }

  func2(barkod: number) {
    this.serv.remove(barkod);
  }
}
