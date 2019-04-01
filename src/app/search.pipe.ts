import { Pipe, PipeTransform } from '@angular/core';
import { Guest } from '../app/guest/guest.class';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(guests: Guest[], criteria: string): Guest[] {
    if(criteria=='')
    return guests;
    let arrOut: Guest[] = [];
    for( let guest of guests) {
      
      if(guest.firstname.toLowerCase().includes(criteria.toLowerCase())){
        arrOut.push(guest);
        continue;
      }
      if(guest.lastname.toLowerCase().includes(criteria.toLowerCase())){
        arrOut.push(guest);
        continue;
      }
      if(guest.phone.toLowerCase().includes(criteria.toLowerCase())){
        arrOut.push(guest);
        continue;
    
    }
    return arrOut;
  }

}
