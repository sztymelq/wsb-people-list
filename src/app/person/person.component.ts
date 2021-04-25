import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from '../model/person.model';


// DUMB COMPONENT
@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  @Input() isSelected: boolean;
  @Input() person: Person; // PROPERTY BINDING
  @Output() iWasClicked: EventEmitter<Person> = new EventEmitter(); // EVENT BINDING

  personClick(person: Person) {
    this.iWasClicked.emit(person);
  }
}

// ngFor [1.2.3.4] console.log(4) NumberListComponent -> NumberComponent Input() Output EventEmitter.emit(4)
