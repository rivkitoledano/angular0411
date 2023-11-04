import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElectricProductComponent } from './electric-product/electric-product.component';
import { ToysProductComponent } from './toys-product/toys-product.component';
import { OutOfStockComponentComponent } from './out-of-stock-component/out-of-stock-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ElectricProductComponent,
    ToysProductComponent,
    OutOfStockComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
