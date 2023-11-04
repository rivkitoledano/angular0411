import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor() { }
  public pro: number[] = [];

  add(str: number) {
    this.pro.push(str)
    console.log(this.pro)
  }

  remove(str: number) {
    this.pro=this.pro.filter(st=>{return st!==str})
    console.log(this.pro)
  }

}
