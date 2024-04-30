import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.services";
import { AuthServices } from "../auth/auth.services";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;

  private userSub: Subscription;
  constructor(private dataStorageService: DataStorageService, private authService: AuthServices){}

  ngOnInit(): void {
   this.userSub = this.authService.user.subscribe( user => {
    //this.isAuthenticated = !!user ? false : true;
    this.isAuthenticated = !!user;
    console.log("!!user",!!user);
    
   });
  }

  onSaveData(){
    this.dataStorageService.storeRecipes();
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe( res => {
      console.log("got", res);
      
    })
  }
  // @Output() featureSelected = new EventEmitter<string>();

    // onSelect(feature: string){
    //     this.featureSelected.emit(feature);
    // }

    onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}