import { Pipe, PipeTransform } from '@angular/core';
import {Person} from './model/person.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(people: Person[], personName: string): Person[] {
    return people.filter((p: Person) => {
      const lowered = personName.toLowerCase();
      const currentPersonName = p.name.toLowerCase();
      return currentPersonName.includes(lowered);
    });
  }
}
