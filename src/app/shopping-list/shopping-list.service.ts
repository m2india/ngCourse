import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService{

    // ingredientSChange = new EventEmitter<Ingredient[]>();

    ingredientSChange = new Subject<Ingredient[]>();

   private ingredients: Ingredient[] = [
        new Ingredient('Apple',5),
        new Ingredient('Banana',10),
      ];

    getIngredient(){
        return this.ingredients.slice();
    }

    AddIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        // this.ingredientSChange.emit(this.ingredients.slice())
        this.ingredientSChange.next(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]){
        // for (let ingredient of ingredients ){
        //     this.AddIngredient(ingredient);
        // }

        this.ingredients.push(...ingredients);
        // this.ingredientSChange.emit(this.ingredients.slice())
        this.ingredientSChange.next(this.ingredients.slice())
    }



}