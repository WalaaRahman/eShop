import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  baseURL = 'https://assessment.caduceuslane.com';

  constructor(private _HttpClient:HttpClient, private _Router:Router) { }

  getProducts():Observable <any>{
console.log("products service");

    return this._HttpClient.get(this.baseURL+'/api/products');
  }

}
