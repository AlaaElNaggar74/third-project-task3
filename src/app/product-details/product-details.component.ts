import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']

})
export class ProductDetailsComponent implements OnInit {
  
  productId: any;
  product: any;

  objProduct:any;

  products = [
    { id: 1, name: 'Product 1', price: 10, stock: 0, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 20, stock: 5, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 30, stock: 10, image: 'product3.jpg' },
    { id: 4, name: 'Product 4', price: 10, stock: 0, image: 'product1.jpg' },
    { id: 5, name: 'Product 5', price: 20, stock: 5, image: 'product2.jpg' },
    { id: 6, name: 'Product 6', price: 30, stock: 10, image: 'product3.jpg' },
    { id: 7, name: 'Product 7', price: 10, stock: 0, image: 'product1.jpg' },
    { id: 8, name: 'Product 8', price: 20, stock: 5, image: 'product2.jpg' },
    { id: 9, name: 'Product 9', price: 30, stock: 10, image: 'product3.jpg' }
  
  ];

  constructor( private _ActivatedRoute: ActivatedRoute ,public _router:Router) {}

  ngOnInit(): void {

    this.productId = this._ActivatedRoute.snapshot.paramMap.get('id');

    this.objProduct = this.products.find((ele: any) => {
      return ele.id == this.productId;
    });
  //   this._ActivatedRoute.paramMap.subscribe(params => {
  //     this.productId = +params.get('id');
  //     this.product = this.products.find(p => p.id === this.productId);
  //   });
  // }



}

back() {
  this._router.navigate(['/products']);
}

}
