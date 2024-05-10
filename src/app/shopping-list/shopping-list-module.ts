import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShoppingRoutingModule } from "./shopping-routing.module";

@NgModule({

    declarations : [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports : [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        ShoppingRoutingModule,
        FormsModule
    ],
    exports : [
        ShoppingListComponent,
        ShoppingEditComponent,
    ]
})

export class ShoppingListModule {}