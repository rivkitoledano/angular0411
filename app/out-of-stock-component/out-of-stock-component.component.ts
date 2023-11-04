import { Component } from '@angular/core';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-out-of-stock-component',
  templateUrl: './out-of-stock-component.component.html',
  styleUrls: ['./out-of-stock-component.component.css']
})
export class OutOfStockComponentComponent {
  constructor(public serv:ProductListService) {

  }

}
