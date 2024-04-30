import { Component, OnInit } from '@angular/core';
import { AuthServices } from './auth/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngCourse';
  // loadedFeature =  'recipe';


  // onNavigate(feature: string){
  //   this.loadedFeature = feature;
  // }

  constructor(private authService: AuthServices){}

  ngOnInit() {
    this.authService.autoLogin(); 
  }



}
