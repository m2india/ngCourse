import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
// import { Subject } from "rxjs";

@Injectable()
export class RecipeServices implements OnInit{
   // recipeSelected = new EventEmitter<Recipe>();

  //  recipeSelected = new Subject<Recipe>();

  recipesChanged = new Subject<Recipe[]>();


  // private recipes: Recipe[] = [
  //       new Recipe('Recipe Name One', 'Recipe Description One', 'https://static01.nyt.com/images/2022/06/22/dining/21beginner-rex3/merlin_208160682_1ced84e3-d8cb-4f26-aa66-76a8e086362b-articleLarge.jpg',[
  //           new Ingredient('lady fingure',1),
  //           new Ingredient('tomottow soop',1)
  //       ]),
  //       new Recipe('Mutton Curry', 'Mutton Curry Recipe with spice', 'https://myfoodstory.com/wp-content/uploads/2016/12/Easy-Mutton-Curry-1.jpg',[
  //           new Ingredient('Meat',1),
  //           new Ingredient('Chicken',1)
  //       ]),
  //     ];

    private recipes:  Recipe[] = [];


    constructor( private slServices:ShoppingListService){}

    ngOnInit(): void {
        
    }

    setRecipes(recipes: Recipe[]){
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
    }
      
    
  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredient: Ingredient[]){
    this.slServices.addIngredients(ingredient);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice(index, 1));
  }
}