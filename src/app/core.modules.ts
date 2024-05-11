import { NgModule } from "@angular/core";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { RecipeServices } from "./recipes/recipe.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInerceptorService } from "./auth/auth-interceptor.service";

@NgModule({
    providers: [
        ShoppingListService,RecipeServices, {provide: HTTP_INTERCEPTORS, useClass: AuthInerceptorService, multi: true}
    ]
})

export class CoreModule {}
