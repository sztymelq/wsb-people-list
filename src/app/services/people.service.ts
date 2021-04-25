import { Injectable } from '@angular/core';
import {Person} from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private people: Person[] = [
    { name: 'Kasia', age: 30, PESEL: 543535 },
    { name: 'Tomek', age: 25, PESEL: 1231 },
    { name: 'Grzegorz', age: 20, PESEL: 765765 },
    { name: 'Jakub', age: 40, PESEL: 1231332131 }
  ];

  public getPeople() {
    return this.people;
  }

  public setPeople(people: Person[]) {
    this.people = people;
  }

  public changeAge(PESEL, age) {
    this.people = this.people.map((person) => {
        if (PESEL === person.PESEL) {
            return {
              ...person,
              age: age
            }
        }
        return age;
    })
  }
}
