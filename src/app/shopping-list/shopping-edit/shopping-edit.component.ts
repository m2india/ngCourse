import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm;
  
  // old version
  //  @ViewChild('nameInput') nameInput: ElementRef;  

  // Angular 8+
  // @ViewChild('nameInput',{static: false}) nameInput: ElementRef;
  // @ViewChild('amountInput',{static: false}) amountInput: ElementRef;

  //old
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor( private shoplistServ: ShoppingListService){}

  ngOnInit(){
   this.subscription = this.shoplistServ.startedEditing.subscribe(
    (index:number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoplistServ.getIngredients(index);

      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    }
   );
  } 
  

  onAddItem(form: NgForm)
  {


    // old
    // const ingName = this.nameInput.nativeElement.value;
    // const ingAmount = this.amountInput.nativeElement.value;

    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if(this.editMode){
      this.shoplistServ.updateIngredient(this.editedItemIndex, newIngredient)
    }else {
      this.shoplistServ.AddIngredient(newIngredient);
    }

    // old
    //  this.ingredientAdded.emit(newIngredient);

    this.editMode = false;
    form.reset();

  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoplistServ.deleteIngredient(this.editedItemIndex);


    console.log("----",this.editedItemIndex);
    
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();


  }


}
