import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

   recipes: Recipe[] = [
    new Recipe('Recipe Name One', 'Recipe Description One', 'https://static01.nyt.com/images/2022/06/22/dining/21beginner-rex3/merlin_208160682_1ced84e3-d8cb-4f26-aa66-76a8e086362b-articleLarge.jpg'),
    new Recipe('Mutton Curry', 'Mutton Curry Recipe with spice', 'https://myfoodstory.com/wp-content/uploads/2016/12/Easy-Mutton-Curry-1.jpg'),
  ];

  constructor(){}

  ngOnInit(){
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
    console.log("recipeWasSelected", this.recipeWasSelected.emit(recipe) );
    
  }

}
