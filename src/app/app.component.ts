import {Component, OnInit} from '@angular/core';
import { Person } from './model/person.model';
import { format } from 'date-fns';

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


  dataFromServer: Person[] = [
    { name: 'Kasia', age: 30, PESEL: 543535 },
    { name: 'Tomek', age: 25, PESEL: 1231 },
    { name: 'Grzegorz', age: 20, PESEL: 765765 },
    { name: 'Jakub', age: 40, PESEL: 1231332131 }
  ];

  ngOnInit(): void {
    this.date = format(new Date(), 'do MMMM yyyy');
  }

  searchKeyHandler(event: KeyboardEvent): void {
    if (event.code.includes('Digit')) {
        event.preventDefault(); // Event Propagation: Browser should stop processing this event
    }
  }

  // CREATE
  addNewPerson(): void {
    if (!this.newPersonName) {
        return;
    }

    this.dataFromServer = [
      { name: this.newPersonName, age: 31, PESEL: 43243222},
      ...this.dataFromServer // Operator SPREAD - czyli kopiowanie propertisów
    ];
  }

  // DELETE
  public removePerson(person: Person): void {
    this.dataFromServer = this.dataFromServer.filter((p: Person) => {
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


