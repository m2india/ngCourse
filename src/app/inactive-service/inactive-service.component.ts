import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-service',
  templateUrl: './inactive-service.component.html',
  styleUrls: ['./inactive-service.component.css']
})
export class InactiveServiceComponent implements OnInit {
  users: string [];

  constructor( private userServices: UsersService ){}
  ngOnInit() {
    this.users = this.userServices.inactiveUsers;
  }

  onSetToActive(id:number){
    console.log("id", id);
    this.userServices.setToActive(id);
  }

}
