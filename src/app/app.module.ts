import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { FormsModule } from '@angular/forms';
import { CustomTitleCasePipe } from './custom-title-case.pipe';
import { SearchPipe } from './search.pipe';
import {PeopleService} from './services/people.service';
import { MyDirectiveDirective } from './my-directive.directive';
import {PersonModule} from './person/person.module';

@NgModule({
  declarations: [  // View related declarations
    AppComponent,
    PeopleListComponent,
    CustomTitleCasePipe,
    SearchPipe,
    MyDirectiveDirective
  ],
  imports: [       // Module related stuff
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PersonModule
  ],
  providers: [
    PeopleService // Singleton
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
