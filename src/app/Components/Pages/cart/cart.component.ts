import { Component } from '@angular/core';
import { CartServiceService } from '../../../Services/cart-service.service';
import { Product } from '../../../Interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartProducts:Product [] =[];
  subTotal:number=0;
  estimatedTotal:number=0;
  shipping:number=40;
  tax:number=1.12;
constructor (private _cartService:CartServiceService){


}
ngOnInit(){
  try {
    this.getCart()
  } catch (error) {
    console.log(error);
    
  }
  
}
getTotals(){
  for (let prod  of this.cartProducts) {
    this.subTotal =Math.round((this.subTotal + prod.price) * 100) / 100 ;
   }
   let x =(this.subTotal * this.tax) + this.shipping;
   this.estimatedTotal= Math.round(x * 100) /100
}
getCart(){
  this._cartService.getUserCart().subscribe({
    next: res =>{
      this.cartProducts=res.data.products
      console.log(this.cartProducts);
      this.getTotals();
    },
    error: err=>{
      console.log(err);
      
    }
  })
}

deleteProduct(id:number, price:number){
  this._cartService.deleteFromCart(id).subscribe({
    next : res =>{
      console.log(res);
      this.getCart();
      this.subTotal = this.subTotal - price ;
      // this.getTotals();

    },
    error : err =>{
      console.log(err);
      
    }
  })
}

}
