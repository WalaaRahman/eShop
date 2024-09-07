import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthenticationService } from '../../../Services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private _AuthService:AuthenticationService,private _Router: Router) { }

  loginForm: FormGroup = new FormGroup({

    "email": new FormControl(null,
      [
        Validators.required,
        Validators.email
      ]),

    "password": new FormControl(null, [
      Validators.required,
      Validators.minLength(6)
    ])

  })



  login() {
    console.log("Login");
    console.log(this.loginForm);

    try {
      
      this._AuthService.login(this.loginForm.value).subscribe({
        next : (response:any) => {
          console.log({response});

          if(response.message == "User Logged in successfully"){
            localStorage.setItem('token',response.token);
            this._AuthService.userToken=response.token;
            this._Router.navigate(['/home']);
          
            
          }

          
        },
        error: (error:any) => {
          alert(error.error.message);
          
        }
      })
    } catch (error) {
      alert(error)
    }
    

  }
}
