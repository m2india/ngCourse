import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServices } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

 // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeServices){}

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
  }

  //old

  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);
  //   console.log("recipeWasSelected", this.recipeWasSelected.emit(recipe) );
  // }

}
