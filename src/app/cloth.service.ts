import { Injectable } from '@angular/core';
import { Clothing } from './clothing';
import { CLOTHING } from './mock-clothing';
import { SHOES } from './mock-clothing';


@Injectable({
  providedIn: 'root'
})
export class ClothService {

  constructor() { }

  getClothingItems(): Clothing[]{
    return CLOTHING;
  }

  getShoeItems(): Clothing[]{
    return SHOES;
  }
}
