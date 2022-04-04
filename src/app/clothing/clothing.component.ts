import { Component, OnInit } from '@angular/core';
import { Clothing } from '../clothing';
import { ClothService } from '../cloth.service';
import { NavigationbarComponent } from '../navigationbar/navigationbar.component';
import { NavBarService } from '../navbar.service';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {

  clothings: Clothing[] = [];

  constructor(private clothService: ClothService, private navbarService: NavBarService, private snackBar: MatSnackBar) { }

  getItems(): void {
    this.clothings = this.clothService.getClothingItems();
  }

  ngOnInit(): void {
    this.sendMessage();
    this.getItems();
  }

  addItemToCart(cloth: Clothing): void{
    //console.log("inside cloth componenet addItemToCart " + JSON.stringify(cloth));
    this.clothService.addItemToCart(cloth);
    this.showSnackbar("Added " + cloth.name + " to Cart!")
  }

  showSnackbar(content: any) {
    this.snackBar.open(content, '',{
      duration: 500
    });
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.navbarService.sendUpdate(2);
}

}
