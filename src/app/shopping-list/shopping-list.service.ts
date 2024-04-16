import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService{

    // ingredientSChange = new EventEmitter<Ingredient[]>();

    ingredientSChange = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

   private ingredients: Ingredient[] = [
        new Ingredient('Apple',5),
        new Ingredient('Banana',10),
      ];

    getIngredient(){
        return this.ingredients.slice();
    }

    getIngredients(index:number){
        return this.ingredients[index];
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

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientSChange.next(this.ingredients.slice());
    }

    deleteIngredient(index:number){
        this.ingredients.splice(index, 1);
        this.ingredientSChange.next(this.ingredients.slice());
    }



}