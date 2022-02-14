import { Component, OnInit } from '@angular/core';
import { Clothing } from '../clothing';
import { ClothService } from '../cloth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Clothing[] = [];

  constructor(private clothService: ClothService) { }

  getItems(): void {
    this.cart = this.clothService.getCartItems();
  }

  ngOnInit(): void {
    this.getItems();
  }

}
