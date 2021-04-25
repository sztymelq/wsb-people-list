import { Component } from '@angular/core';
import { Person } from './model/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // template VIEW
  styleUrls: ['./app.component.scss']
})
export class AppComponent { // MVC - MODEL - VIEW - CONTROLLER

  title: string = 'WSB HR SYSTEM';
  isTitleVisible: boolean = true;
  listWidth = 100; // Change Detection
  listBackground = 'blue';

  dataFromServer: Person[] = [
    { name: 'Kasia', age: 30, PESEL: 543535 },
    { name: 'Tomek', age: 25, PESEL: 1231 },
    { name: 'Grzegorz', age: 20, PESEL: 765765 },
    { name: 'Jakub', age: 40, PESEL: 1231332131 },
  ];

  listHidden = false

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


