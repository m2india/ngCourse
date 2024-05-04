import { Component, ComponentFactory, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthServices } from './auth.services';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { Route, Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholde-directive/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnDestroy {
  isLogingMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;
  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;

  private closeSub: Subscription;

  constructor(
    private authServices: AuthServices,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ){}


  onSwitchMode(){
    this.isLogingMode = !this.isLogingMode;
  }

  onSubmit(form: NgForm){
    //console.log(form.value);

    if(!form.valid){
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>

    this.isLoading = true;
    
    if(this.isLogingMode){

      authObs = this.authServices.login(email,password)
    }
    else
    {
      authObs = this.authServices.signup(email, password);
    }

    authObs.subscribe( resData => {
      console.log("resData", resData);
      this.isLoading = false;
      this.router.navigate(['/recipes']);
      },
      errorMessage => {
        //console.log("errorMessage", errorMessage);
        //this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );

    
    form.reset();
  }

  onHandleError(){
    this.error = null;
  }

  ngOnDestroy(): void {
    if(this.closeSub){
      this.closeSub.unsubscribe();
    }
  }

  private showErrorAlert(message : string){

    // const alertCmp = new AlertComponent();

    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);

    const hostViewContainRef = this.alertHost.viewContainRef;
    hostViewContainRef.clear();

    const componentRef = hostViewContainRef.createComponent(alertCmpFactory);

    componentRef.instance.message = message;

    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainRef.clear();
    })
  }
}
