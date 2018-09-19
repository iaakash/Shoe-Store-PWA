import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './containers/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductResolver } from './product.resolver';


@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [ProductListComponent, ProductComponent, ProductDetailsComponent, ProductsComponent],
  providers: [ProductResolver]
})
export class ProductModule { }
