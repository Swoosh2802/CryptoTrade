import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedUser } from '../_models/loggedUser.model';

@Component({
  selector: 'app-account-drop-down',
  templateUrl: './account-drop-down.component.html',
  styleUrls: ['./account-drop-down.component.css']
})  

export class AccountDropDownComponent {
  isAdmin : Boolean = false;

  constructor(private router : Router,
              public loggedUser : LoggedUser) {
  }

  disconnected(){
    this.loggedUser.logout();
    this.router.navigate(["/"]);
  }
}
