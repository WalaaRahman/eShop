import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginForm } from '../Interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseURL = 'https://assessment.caduceuslane.com';

  userToken:any = localStorage.getItem('token');
  constructor(private _HttpClient:HttpClient, private _Router:Router) { }

 

  login(loginForm:LoginForm):Observable<any>{
    return this._HttpClient.post(this.baseURL+'/api/login',loginForm)
  }

  logout(){
    localStorage.removeItem('token');
    this.userToken = "";
    this._Router.navigate(['/login']);
  }
}

