import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeServices } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

 @Input() recipe: Recipe;
 @Input() index: number;
 // @Output() recipeSelected = new EventEmitter<void>();  // old 

 // constructor(private recipeService: RecipeServices){}
 constructor(){}

 ngOnInit(): void {
   
 }

//  onSelected(){
//   //old
//   // this.recipeSelected.emit();
//   this.recipeService.recipeSelected.emit(this.recipe);
//  }


}
