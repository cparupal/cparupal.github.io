import { Component, OnInit } from '@angular/core';
import { Clothing } from '../clothing';
import { ClothService } from '../cloth.service';
import { isNgTemplate } from '@angular/compiler';
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Clothing[] = [];
  totalPrice: number = 0;


  constructor(private clothService: ClothService, private snackBar: MatSnackBar) { }

  getItems(): void {
    this.cart = this.clothService.getCartItems();
  }

  ngOnInit(): void {
    this.getItems();
    this.calculatePrice();
    this.notifyForChange();
  }
  notifyForChange() {
    this.clothService.notifyAboutChange();
  }

  removeItem(item: Clothing): void{
    const index: number = this.cart.indexOf(item);
    this.cart.splice(index,1);
    //console.log("new array: " + JSON.stringify(this.cart));
    this.calculatePrice();
    this.notifyForChange();
    this.showSnackbar("Removed " + item.name + " from the Cart!")
  }

  calculatePrice(): void{
    //console.log("Inside calc: " + JSON.stringify(this.cart));
    this.totalPrice = 0;
    for(var item of this.cart){
      this.totalPrice += item.price;
    }
    //console.log("Price: " + JSON.stringify(this.totalPrice));
  }

  showSnackbar(content: any) {
    this.snackBar.open(content, '',{
      duration: 500
    });
  }

  

}
