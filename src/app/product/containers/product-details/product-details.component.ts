import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Product } from '../../models/product';
import { UiService } from '../../../ui/ui.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:Product;

  constructor(
    private route: ActivatedRoute,
    private uiService: UiService
  ) { }

  ngOnInit() {
    this.route.data
      .pipe(
        tap(data => this.metaData(data['product'])),
        map(data => data['product'])
      )
      .subscribe(res => this.product = res);
  }

  metaData(product: Product) {
    this.uiService.setMetaData({
      title: `${product.name} for only $${product.price}`,
      description: product.description,
      image: product.image,
    });
  }

}
