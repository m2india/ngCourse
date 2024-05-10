import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DirectiveStruComponent } from './directive-stru/directive-stru.component';
import { BasicHighlightDirective } from './basic-highlight.directive/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { InactiveServiceComponent } from './inactive-service/inactive-service.component';
import { ActiveServiceComponent } from './active-service/active-service.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeServices } from './recipes/recipe.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInerceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderDirective } from './shared/placeholde-directive/placeholder.directive';
import { RecipeModule } from './recipes/recipes-module';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DirectiveStruComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    InactiveServiceComponent,
    ActiveServiceComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipeModule
  ],
  providers: [ShoppingListService,RecipeServices, {provide: HTTP_INTERCEPTORS, useClass: AuthInerceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
