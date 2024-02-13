import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-stru',
  templateUrl: './directive-stru.component.html',
  styleUrls: ['./directive-stru.component.css']
})
export class DirectiveStruComponent implements OnInit {

  onlyOdd = false;
  numbers = [1,2,3,4,5];
  oddNumbers = [1,3,5,7,9];
  evenNumbers = [2,4,6,8,10];
  value= 10;


  ngOnInit(): void {
    
  }


}
