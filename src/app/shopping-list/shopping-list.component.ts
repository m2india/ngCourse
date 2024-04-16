import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy  {
  
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor( private shoppinglistServices: ShoppingListService){}

  ngOnInit(){
    this.ingredients = this.shoppinglistServices.getIngredient(); // to display
    this.igChangeSub = this.shoppinglistServices.ingredientSChange.subscribe(
      (ingredients:Ingredient[]) => {
        this.ingredients = ingredients
      }
      )
  }

  onEditItem(index: number){
    this.shoppinglistServices.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

  //old

  // onIngredientAdded(getIngredient: Ingredient){
  //   this.ingredients.push(getIngredient);
  // }

}
