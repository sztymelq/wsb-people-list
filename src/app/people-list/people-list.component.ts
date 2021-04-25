import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Person} from '../model/person.model';
import {PeopleService} from '../services/people.service';

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit, OnDestroy {
  @Input() public people: Person[];
  @Output() public personRemoved: EventEmitter<Person> = new EventEmitter<Person>();
  public personSelected: Person;
  public selectedOnlyMode: boolean = false;

  constructor(private peopleService: PeopleService) {}

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

  public showSelectedOnly(): void {
    this.selectedOnlyMode = !this.selectedOnlyMode;
    if (!this.selectedOnlyMode) {
      this.people = this.peopleService.getPeople();
    } else {
      this.people = this.people.filter((p: Person) => {
          return p === this.personSelected;
      })
    }
  }
}

// Component SMART
// Component DUMB

