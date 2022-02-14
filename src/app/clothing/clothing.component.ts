import { Component, OnInit } from '@angular/core';
import { Clothing } from '../clothing';
import { ClothService } from '../cloth.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {

  clothings: Clothing[] = [];

  constructor(private clothService: ClothService) { }

  getItems(): void {
    this.clothings = this.clothService.getClothingItems();
  }

  ngOnInit(): void {
    this.getItems();
  }

  addItemToCart(cloth: Clothing): void{
    //console.log("inside cloth componenet addItemToCart " + JSON.stringify(cloth));
    this.clothService.addItemToCart(cloth);
  }

}
