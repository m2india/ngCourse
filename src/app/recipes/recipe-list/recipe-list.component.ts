import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServices } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  subscription: Subscription;
 // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeServices, private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (newrecipes: Recipe[]) =>
          this.recipes = newrecipes 
    )
    this.recipes = this.recipeService.getRecipes();
  }

  //old

  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);
  //   console.log("recipeWasSelected", this.recipeWasSelected.emit(recipe) );
  // }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  

}
