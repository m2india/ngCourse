import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { DataStorageService } from "../shared/data-storage.services";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})

// export class RecipesResolverService implements Resolve<Recipe[]> {

export class RecipesResolverService implements Resolve<Recipe[]> {

    constructor(private dataStoreService: DataStorageService){}


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.dataStoreService.fetchRecipes();
    }
    
}