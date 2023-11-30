import { Injectable, Injector, Input } from '@angular/core';
import { UserLogin } from '../_models/UserLogin.model';
import { Store, select } from '@ngrx/store';
import { User } from '../_models/User.model';
import { Url } from '../_models/Url.model';
import { LoggedUser } from '../_models/loggedUser.model';
import { UserRegister } from '../_models/UserRegister.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

  constructor(private http: HttpClient,
              private loggedUser : LoggedUser) {
  }

  setConnectTrue(jsonUser : User) {
      this.loggedUser.login(jsonUser);
  }

  toRegister(user : UserRegister){
    /*
    return fetch(`${Url.getUrlBD()}/users/register`, {
      method: 'POST',
      headers: this.myHeaders,
      body: JSON.stringify(user),
    });
    */
  }

  toLogin(user : UserLogin){
    return this.http.post<User>(`${Url.getUrlBD()}/users/login`, JSON.stringify(user), {headers: this.headers});
  }
}
