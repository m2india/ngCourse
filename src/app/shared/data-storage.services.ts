import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeServices } from "../recipes/recipe.service";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { Ingredient } from "./ingredient.model";
import { AuthServices } from "../auth/auth.services";


@Injectable({providedIn: 'root'})

export class DataStorageService {

    constructor(private httpC: HttpClient, private recipeService: RecipeServices, private authService: AuthServices){}

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        return this.httpC.put('https://ngcourse-94a1d-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe( res => {
            console.log(res);
        })
    }

    fetchRecipes(){
            return this.httpC.get<Recipe[]>(
                'https://ngcourse-94a1d-default-rtdb.firebaseio.com/recipes.json'

            ).pipe(
        map( recipes => {
            return recipes.map( recipe => {
                return {... recipe, Ingredient: recipe.ingredients ? recipe.ingredients : [] 

                }; 
            });
        }),
        tap( recipes => {
            this.recipeService.setRecipes(recipes)
        })
    );
    }
}