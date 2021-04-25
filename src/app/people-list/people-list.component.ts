import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Person} from '../model/person.model';

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit, OnDestroy {
  @Input() public people: Person[];
  public personSelected: Person;

  public selectPerson(person: Person) {
    this.personSelected = person;
  }

  public ngOnInit(): void {
    this.selectPerson(this.people[this.people.length - 1]);
    console.log('COMPONENT HAS BEEN INITIALIZED');
  }

  public ngOnDestroy(): void {
    console.log('component is destroyed!')
  }
}

// Component SMART
// Component DUMB

