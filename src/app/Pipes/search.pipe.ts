import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Interfaces/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productArray: any[],searchTerm: string): any[] {

return productArray.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
}
}