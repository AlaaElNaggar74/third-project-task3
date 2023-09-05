import { Component, Input } from '@angular/core';
// import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: any;

  constructor(public _Router:Router){}

  detailPage(iddd:any){
    this._Router.navigate(['product',iddd],)
  }
}
