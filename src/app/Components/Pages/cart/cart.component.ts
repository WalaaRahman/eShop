import { Component } from '@angular/core';
import { SectionService } from '../../../Services/section.service';
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
constructor (private _sectionService:SectionService, private _cartService:CartServiceService){
  this._sectionService.sectionName ='Your Cart';

}
ngOnInit(){
  try {
    this._cartService.getUserCart().subscribe({
      next: res =>{
        this.cartProducts=res.data.products
        console.log(this.cartProducts);
        for (let prod  of this.cartProducts) {
         this.subTotal =Math.round((this.subTotal + prod.price) * 100) / 100 ;
        }
        let x =(this.subTotal * this.tax) + this.shipping;
        this.estimatedTotal= Math.round(x * 100) /100
      },
      error: err=>{
        console.log(err);
        
      }
    })
  } catch (error) {
    console.log(error);
    
  }
  
}


deleteProduct(id:number){
  this._cartService.deleteFromCart(id).subscribe({
    next : res =>{
      console.log(res);
      
    },
    error : err =>{
      console.log(err);
      
    }
  })
}

}
