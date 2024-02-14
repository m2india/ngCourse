import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-service',
  templateUrl: './active-service.component.html',
  styleUrls: ['./active-service.component.css']
})
export class ActiveServiceComponent implements OnInit {

  // users: string[];

  // constructor(private userServices: UsersService){}

  // ngOnInit(): void {
  //   this.users = this.userServices.activeUsers;
  // }

  // onSetToInactive(id: number){
  //   console.log(id);
  //   // Taking services
  //   this.userServices.setToInactive(id);
  // }

  users: string[];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }

}
