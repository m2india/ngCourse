import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ShoppingRoutingModule } from "./shopping-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({

    declarations : [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports : [
        RouterModule,
        ShoppingRoutingModule,
        FormsModule,
        SharedModule
    ],
    exports : [
        ShoppingListComponent,
        ShoppingEditComponent,
    ]
})

export class ShoppingListModule {}