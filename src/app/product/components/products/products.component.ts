import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  @Input() products: Product[];
  
  constructor() { }

  ngOnInit() {
  
  }

  

}
