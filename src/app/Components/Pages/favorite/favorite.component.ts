import { Component } from '@angular/core';
import { Product } from '../../../Interfaces/product';
import { FavoritServiceService } from '../../../Services/favorit-service.service';
import { CartServiceService } from '../../../Services/cart-service.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent {
  favProducts:Product [] =[];

constructor ( private _favService:FavoritServiceService , 
  private _cartServiceService:CartServiceService
){


}
ngOnInit(){
  try {
    this.getFav()
  } catch (error) {
    console.log(error);
    
  }
  
}

getFav(){
  this._favService.getUserFav().subscribe({
    next: res =>{
      console.log(res);
      
      this.favProducts=res.data
      // console.log(this.favProducts);
    },
    error: err=>{
      console.log(err);
      
    }
  })
}

removeFav(id:number){
  this._favService.deleteFromFav(id).subscribe({
    next : res =>{
      console.log(res);
      this.getFav();

    },
    error : err =>{
      console.log(err);
      
    }
  })
}

addToCart(id:number){
  

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
