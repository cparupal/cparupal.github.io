import { Component, OnInit } from '@angular/core';
import { Clothing } from '../clothing';
import { ClothService } from '../cloth.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Clothing[] = [];
  totalPrice: number = 0;

  constructor(private clothService: ClothService) { }

  getItems(): void {
    this.cart = this.clothService.getCartItems();
  }

  ngOnInit(): void {
    this.getItems();
    this.calculatePrice();
  }

  removeItem(item: Clothing): void{
    const index: number = this.cart.indexOf(item);
    this.cart.splice(index,1);
    this.calculatePrice();
  }

  calculatePrice(): void{
    for(var item of this.cart){
      this.totalPrice += item.price;
    }
  }

}
