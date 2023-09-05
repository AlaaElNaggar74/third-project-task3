import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  
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

  constructor(private router: Router) {}

  // ngOnInit(): void {}

  goToProductDetails(id: number): void {
    this.router.navigate(['/product', id]);
  }
}
