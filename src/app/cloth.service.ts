import { Injectable } from '@angular/core';
import { Clothing } from './clothing';
import { CLOTHING } from './mock-clothing';
import { SHOES } from './mock-clothing';


@Injectable({
  providedIn: 'root'
})
export class ClothService {

  cart: Clothing[] = [];

  constructor() { 
  }

  getClothingItems(): Clothing[]{
    return CLOTHING;
  }

  getShoeItems(): Clothing[]{
    return SHOES;
  }

  addItemToCart(item: Clothing): void{
    //console.log("inside cloth service addItemToCart " + JSON.stringify(item));
    this.cart.push(item);
    //console.log("after add: " + JSON.stringify(this.cart));
  }

  getCartItems(): Clothing[]{
    return this.cart;
  }
}
