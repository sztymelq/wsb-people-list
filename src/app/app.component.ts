import {Component, OnInit} from '@angular/core';
import { Person } from './model/person.model';
import { format } from 'date-fns';
import {PeopleService} from './services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // template VIEW
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { // MVC - MODEL - VIEW - CONTROLLER
  date: string = '';
  searchPhrase: string = '';
  newPersonName: string;
  title: string = 'wsb hr system';
  isTitleVisible: boolean = true;
  listWidth = 100; // Change Detection
  listBackground = 'blue';
  listHidden = false
  peopleList: Person[] = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleList = this.peopleService.getPeople();
    this.date = format(new Date(), 'do MMMM yyyy');
  }

  // CREATE
  addNewPerson(): void {
    if (!this.newPersonName) {
        return;
    }

    this.peopleList = [
      { name: this.newPersonName, age: 31, PESEL: 43243222},
      ...this.peopleList // Operator SPREAD - czyli kopiowanie propertisów
    ];
  }

  // DELETE
  public removePerson(person: Person): void {
    this.peopleList = this.peopleList.filter((p: Person) => {
      return p !== person;
    });
  }

  // buttonClick(): void {
  //   // this.listWidth = this.listWidth + 100;
  //   if (this.listBackground === 'blue') {
  //       this.listBackground = 'green';
  //   } else {
  //     this.listBackground = 'blue';
  //   }
  //   // this.isTitleVisible = !this.isTitleVisible;
  // }
}


//                      AppComponent data
//                      /                   \
//          PersonDetailsComponent       PeopleListComponent [1,2,3,4,5] Input()    console.log(4)
//                                                         \
//                                                           PersonComponent 4    Output()


