import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Person} from '../model/person.model';

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit, OnDestroy {
  @Input() public people: Person[];
  @Output() public personRemoved: EventEmitter<Person> = new EventEmitter<Person>();
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

  public handleRemovePerson(person: Person): void {
    this.personRemoved.emit(person);
  }
}

// Component SMART
// Component DUMB

