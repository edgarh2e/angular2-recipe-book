import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../ingredient";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'http://thumbs.ebaystatic.com/images/m/mfXELL6zPWJE4OC0agiXMZw/s-l225.jpg',[
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Dummy 2', 'Dummy 2', 'http://thumbs1.ebaystatic.com/d/l225/m/mmO4j9mo_hxxVRI9oarv-Hw.jpg',[])
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

}
