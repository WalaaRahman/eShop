import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  baseURL = 'https://assessment.caduceuslane.com';
  constructor(private _HttpClient:HttpClient , private _authenticationService:AuthenticationService) { }

  addToCart(productID:number):Observable<any>{
    return  this._HttpClient.post(this.baseURL +'/api/add-to-cart',{product:productID},{
      headers:{
        'Authorization': `Bearer ${localStorage.getItem("token")}`  
        
      
      }
    });
  }

  getUserCart():Observable<any>{
    return  this._HttpClient.get(this.baseURL +'/api/user-cart',{
      headers:{
        'Authorization': `Bearer ${localStorage.getItem("token")}`  
        
      
      }
    });
  }

  deleteFromCart(productID:number):Observable<any>{
    return  this._HttpClient.post(this.baseURL +'/api/remove-form-cart',{product:productID},
      {
      headers:{
        'Authorization': `Bearer ${localStorage.getItem("token")}`  
        
      
      }
    });
  }
}
