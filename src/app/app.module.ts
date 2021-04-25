import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonComponent } from './person/person.component';
import { FormsModule } from '@angular/forms';
import { CustomTitleCasePipe } from './custom-title-case.pipe';
import { SearchPipe } from './search.pipe';
import {PeopleService} from './services/people.service';
import { MyDirectiveDirective } from './my-directive.directive';

@NgModule({
  declarations: [  // View related declarations
    AppComponent,
    PeopleListComponent,
    PersonComponent,
    CustomTitleCasePipe,
    SearchPipe,
    MyDirectiveDirective
  ],
  imports: [       // Module related stuff
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    PeopleService // Singleton
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
