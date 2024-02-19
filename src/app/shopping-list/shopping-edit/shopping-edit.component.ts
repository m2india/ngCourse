import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // old version
  //  @ViewChild('nameInput') nameInput: ElementRef;  

  // Angular 8+
  @ViewChild('nameInput',{static: false}) nameInput: ElementRef;
  @ViewChild('amountInput',{static: false}) amountInput: ElementRef;

  //old
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor( private shoplistServ: ShoppingListService){}

  ngOnInit(){
    
  } 
  

  onAddItem()
  {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoplistServ.AddIngredient(newIngredient);

  // old
  //  this.ingredientAdded.emit(newIngredient);
  }
}
