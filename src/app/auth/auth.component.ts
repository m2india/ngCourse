import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthServices } from './auth.services';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLogingMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;

  constructor(private authServices: AuthServices, private router: Router){}


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
        console.log("errorMessage", errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    
    form.reset();
  }
}
