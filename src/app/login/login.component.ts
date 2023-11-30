import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as fromAction from "../store";
import { IUserState } from '../store/reducer/User.reducer';
import { UserLogin } from '../_models/UserLogin.model';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm!: FormGroup;
  requestState: boolean = true;

  constructor(private userService : UserService,
              private router : Router,
              private _store: Store<IUserState>) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.userForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    });
  }

  onSubmitForm(){
    const formValue = this.userForm.value;
    
    // Permet de dire que l'utilisateur à touché au champs même si ce n'est pas vrai, cela va permettre d'activer les erreurs dans la vue
    this.userForm.markAsTouched();

    if(this.userForm.valid){
      const newUser = new UserLogin(
        formValue["email"],
        formValue["password"]
      );

      this._store.dispatch(fromAction.PostLogin({payload: newUser}));

      const userPost$ = this._store.pipe(select(fromAction.loginSelectorGetUser));

      userPost$.subscribe(res => {
        if(res.Data != null){
          this.requestState = true;
          this.userService.setConnectTrue(res.Data);
          
          this.router.navigate(["/"]);
        }else{
          this.requestState = false;
        }
      });
    }
  }

  registerRoute(){
    this.router.navigate(["register"]);
  }
}
