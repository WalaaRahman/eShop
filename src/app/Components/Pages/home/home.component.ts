import { Component } from '@angular/core';
import { Product } from '../../../Interfaces/product';
import { ProductsServiceService } from '../../../Services/products-service.service';
import { SectionService } from '../../../Services/section.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
// products:Product[] = [
//   {
//   "name": "Vern Gibson",
//   "category": "Sun",
//   "price": 14.91,
//   "image": "https://assessment.caduceuslane.com/storage/uploads/vitiligio_Balm-5.png",
//   "review": "Iste rerum voluptatum aut autem in voluptate facilis dignissimos quod quia quia excepturi quibusdam rerum eius sed aliquid ea qui consectetur et vel et ea dolorem quod molestias quia et recusandae culpa quod illo non ut autem ipsa accusamus quis sit minus est ut exercitationem quibusdam iure autem quibusdam non exercitationem veniam est ea est sapiente velit beatae dolores et libero ut voluptates et ea pariatur velit mollitia nemo hic quis laboriosam quod quis ut et nam placeat nesciunt quia natus ducimus rem debitis et nesciunt.",
//   "description": "Deserunt aliquam sed mollitia ut aut ipsa rerum rerum illo asperiores quaerat voluptatem eos id soluta asperiores quis sit provident et id porro soluta id porro inventore maxime mollitia fuga iure aut et officiis sapiente rerum et rerum dicta nisi et dolorem nihil perspiciatis magni eligendi velit dolorum enim dolores aut similique non sint sit quo omnis nemo omnis omnis sed a debitis est ea reiciendis ex debitis id voluptates voluptas quia et ea magnam non consequatur animi placeat neque labore laboriosam veritatis velit modi quisquam et eius dolorum quo provident iure.",
//   "rate": 3.17
// },
//   {
//   "name": "Vern Gibson",
//   "category": "Ezcema",
//   "price": 14.91,
//   "image": "https://assessment.caduceuslane.com/storage/uploads/vitiligio_Balm-5.png",
//   "review": "Iste rerum voluptatum aut autem in voluptate facilis dignissimos quod quia quia excepturi quibusdam rerum eius sed aliquid ea qui consectetur et vel et ea dolorem quod molestias quia et recusandae culpa quod illo non ut autem ipsa accusamus quis sit minus est ut exercitationem quibusdam iure autem quibusdam non exercitationem veniam est ea est sapiente velit beatae dolores et libero ut voluptates et ea pariatur velit mollitia nemo hic quis laboriosam quod quis ut et nam placeat nesciunt quia natus ducimus rem debitis et nesciunt.",
//   "description": "Deserunt aliquam sed mollitia ut aut ipsa rerum rerum illo asperiores quaerat voluptatem eos id soluta asperiores quis sit provident et id porro soluta id porro inventore maxime mollitia fuga iure aut et officiis sapiente rerum et rerum dicta nisi et dolorem nihil perspiciatis magni eligendi velit dolorum enim dolores aut similique non sint sit quo omnis nemo omnis omnis sed a debitis est ea reiciendis ex debitis id voluptates voluptas quia et ea magnam non consequatur animi placeat neque labore laboriosam veritatis velit modi quisquam et eius dolorum quo provident iure.",
//   "rate": 3.17
// },
//   {
//   "name": "Vern Gibson",
//   "category": "Psoriasis",
//   "price": 14.91,
//   "image": "https://assessment.caduceuslane.com/storage/uploads/vitiligio_Balm-5.png",
//   "review": "Iste rerum voluptatum aut autem in voluptate facilis dignissimos quod quia quia excepturi quibusdam rerum eius sed aliquid ea qui consectetur et vel et ea dolorem quod molestias quia et recusandae culpa quod illo non ut autem ipsa accusamus quis sit minus est ut exercitationem quibusdam iure autem quibusdam non exercitationem veniam est ea est sapiente velit beatae dolores et libero ut voluptates et ea pariatur velit mollitia nemo hic quis laboriosam quod quis ut et nam placeat nesciunt quia natus ducimus rem debitis et nesciunt.",
//   "description": "Deserunt aliquam sed mollitia ut aut ipsa rerum rerum illo asperiores quaerat voluptatem eos id soluta asperiores quis sit provident et id porro soluta id porro inventore maxime mollitia fuga iure aut et officiis sapiente rerum et rerum dicta nisi et dolorem nihil perspiciatis magni eligendi velit dolorum enim dolores aut similique non sint sit quo omnis nemo omnis omnis sed a debitis est ea reiciendis ex debitis id voluptates voluptas quia et ea magnam non consequatur animi placeat neque labore laboriosam veritatis velit modi quisquam et eius dolorum quo provident iure.",
//   "rate": 3.17
// },
//   {
//   "name": "Vern Gibson",
//   "category": "Vitiligio",
//   "price": 14.91,
//   "image": "https://assessment.caduceuslane.com/storage/uploads/vitiligio_Balm-5.png",
//   "review": "Iste rerum voluptatum aut autem in voluptate facilis dignissimos quod quia quia excepturi quibusdam rerum eius sed aliquid ea qui consectetur et vel et ea dolorem quod molestias quia et recusandae culpa quod illo non ut autem ipsa accusamus quis sit minus est ut exercitationem quibusdam iure autem quibusdam non exercitationem veniam est ea est sapiente velit beatae dolores et libero ut voluptates et ea pariatur velit mollitia nemo hic quis laboriosam quod quis ut et nam placeat nesciunt quia natus ducimus rem debitis et nesciunt.",
//   "description": "Deserunt aliquam sed mollitia ut aut ipsa rerum rerum illo asperiores quaerat voluptatem eos id soluta asperiores quis sit provident et id porro soluta id porro inventore maxime mollitia fuga iure aut et officiis sapiente rerum et rerum dicta nisi et dolorem nihil perspiciatis magni eligendi velit dolorum enim dolores aut similique non sint sit quo omnis nemo omnis omnis sed a debitis est ea reiciendis ex debitis id voluptates voluptas quia et ea magnam non consequatur animi placeat neque labore laboriosam veritatis velit modi quisquam et eius dolorum quo provident iure.",
//   "rate": 3.17
// }]
products:Product[] =[];
sunProduct:Product [] =[];
ezcemaProduct:Product [] =[];
psoriasisProduct:Product [] =[];
vitiligioProduct:Product [] =[];

loading:boolean = true;
constructor(private _productsServiceService: ProductsServiceService , private _sectionService:SectionService){}
ngOnInit(){
  // console.log("hi");
  console.log(this._sectionService.sectionName);
  
try{
this._productsServiceService.getProducts().subscribe({
  next:(response)=>{
    console.log(response);
    this.products=response.data;
    this.sunProduct = this.products.filter((product)=>product.category === "Sun");
    this.ezcemaProduct = this.products.filter((product)=>product.category === "Ezcema");
    this.psoriasisProduct = this.products.filter((product)=>product.category === "Psoriasis");
    this.vitiligioProduct = this.products.filter((product)=>product.category === "Vitiligio");
    if( this.products !== null && 
      this.sunProduct !== null &&
      this.ezcemaProduct !== null &&
      this.psoriasisProduct !== null &&
      this.vitiligioProduct !== null
     ){
      this.loading = false;

     }
  },
  error: (err) => {
    console.log(err );

  }
})
}
catch (error){
console.log(error);

}
}


sun():any{
  console.log(this.products);
  console.log(this.sunProduct);
  console.log(this.ezcemaProduct);
  console.log(this.psoriasisProduct);
  console.log(this.vitiligioProduct);
  
  
}



}
