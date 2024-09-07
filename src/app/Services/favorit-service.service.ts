import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritServiceService {

  baseURL = 'https://assessment.caduceuslane.com';
  constructor(private _HttpClient:HttpClient , private _authenticationService:AuthenticationService) { }

  addToFav(productID:number):Observable<any>{
    return  this._HttpClient.post(this.baseURL +'/api/add-to-favorites',{product:productID},{
      headers:{
        'Authorization': `Bearer ${localStorage.getItem("token")}`  
        
      
      }
    });
  }

  getUserFav():Observable<any>{
    return  this._HttpClient.get(this.baseURL +'/api/user-favorites',{
      headers:{
        'Authorization': `Bearer ${localStorage.getItem("token")}`  
        
      
      }
    });
  }

  deleteFromFav(productID:number):Observable<any>{
    return  this._HttpClient.post(this.baseURL +'/api/remove-form-favorites',{product:productID},{
      headers:{
        'Authorization': `Bearer ${localStorage.getItem("token")}`  
        
      
      }
    });
  }
}
