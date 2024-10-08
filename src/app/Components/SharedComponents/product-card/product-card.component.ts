import { Component, Input } from '@angular/core';
import { Product } from '../../../Interfaces/product';
import { AuthenticationService } from '../../../Services/authentication.service';
import { Router } from '@angular/router';
import { CartServiceService } from '../../../Services/cart-service.service';
import { FavoritServiceService } from '../../../Services/favorit-service.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  constructor(private _authenticationService:AuthenticationService ,
    private _cartServiceService:CartServiceService,
    private _favServiceService:FavoritServiceService,
     private _Router:Router){}
@Input() productObject:Product = {
  id:0,
  name: "",
  category: "",
  price:0,
  image: "",
  review:"",
  description:"",
  rate:0
}

addToFav(id:number){
  
  if (!this._authenticationService.userToken  ) {
    this._Router.navigate(['/login']);
  }
  else{
    console.log("add to Cart");
console.log({id});

    this._favServiceService.addToFav(id).subscribe({
      next:(response)=>{
        console.log(response);
        
      },
      error: (err) => {
        console.log(err );
    
      }
    })

    }

}
addToCart(id:number){
  
  if (!this._authenticationService.userToken  ) {
    this._Router.navigate(['/login']);
  }
  else{
    console.log("add to Cart");
console.log({id});

    this._cartServiceService.addToCart(id).subscribe({
      next:(response)=>{
        console.log(response);
        
      },
      error: (err) => {
        console.log(err );
    
      }
    })

    }

    
  }
}



