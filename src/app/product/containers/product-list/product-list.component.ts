import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { UiService } from '../../../ui/ui.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private uiService: UiService
  ) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
      this.products$ = this.productService.getProducts().pipe(
        tap(products => this.metaData(products))
      )
  }

  metaData(products: Product[]) {
    this.uiService.setMetaData({
      title: 'Products',
      description: `Check out our collection of ${products.length} products`
    });
  }

}
