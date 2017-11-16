import { Pipe, PipeTransform } from '@angular/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'CountryPipe'
})
export class CountryPipe implements PipeTransform {
  transform(value, args?) {    
    let [country] = args;
    return value.filter(orderList => {
      return !country || (orderList.country == country);
    });
  }
}