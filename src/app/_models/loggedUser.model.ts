import { Injectable, Input } from '@angular/core';
import { User } from './User.model';
import { Url } from '../_models/Url.model';

@Injectable({
    providedIn: 'root'
})
export class LoggedUser{
    @Input() private logged! : Boolean;
    private user! : User;
    private myHeaders = new Headers();

    constructor(){
        this.myHeaders.append("Content-Type", "application/json");
        let token = localStorage.getItem("token");
        
        if(token == null){
            this.logout();
        }else{
            fetch(`${Url.getUrlBD()}/users/isConnected`, {
                method: 'POST',
                headers: this.myHeaders,
                body: JSON.parse(token),
            }).then(response => response.json())
            .then(user => {
                this.login(user);
            }).catch(error => {
                this.logout();
            });
        }
    }

    isConnected(){
        return this.logged;
    }

    logout(){
        localStorage.removeItem("token");
        this.logged = false;
    }

    login(userTemp: User){
        this.user = new User(userTemp);
        localStorage.setItem("token", JSON.stringify(this.user.token));
        this.logged = true;
    }

    getUser(){
        return this.user;
    }
}