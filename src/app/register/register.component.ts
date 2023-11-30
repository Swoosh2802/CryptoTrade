import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegister } from '../_models/UserRegister.model';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm!: FormGroup;
  listPays!: {code: string, name: string}[];

  constructor(private userService : UserService,
              private router : Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.userForm = new FormGroup({
      pseudo: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }
  
  onSubmitForm(){
    const formValue = this.userForm.value;

    // Permet de dire que l'utilisateur à touché au champs même si ce n'est pas vrai, cela va permettre d'activer les erreurs dans la vue
    this.userForm.markAsTouched();

    if(this.userForm.valid){
      const newUser = new UserRegister(
        formValue["pseudo"],
        formValue["email"],
        formValue["password"]
        );
      this.userService.toRegister(newUser);
      this.router.navigate(["/"]);
    }
  }
}