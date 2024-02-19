import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit  {
  
  ingredients: Ingredient[];

  constructor( private shoppinglistServices: ShoppingListService){}

  ngOnInit(){
    this.ingredients = this.shoppinglistServices.getIngredient(); // to display
    this.shoppinglistServices.ingredientSChange.subscribe(
      (ingredients:Ingredient[]) => {
        this.ingredients = ingredients
      }
      )
  }

  //old

  // onIngredientAdded(getIngredient: Ingredient){
  //   this.ingredients.push(getIngredient);
  // }

}
