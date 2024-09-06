import { Component, Input } from '@angular/core';
import { Product } from '../../../Interfaces/product';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
@Input() productObject:Product = {
  name: "",
  category: "",
  price:0,
  image: "",
  review:"",
  description:"",
  rate:0
}
}
