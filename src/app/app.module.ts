import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonComponent } from './person/person.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [  // View related declarations
    AppComponent,
    PeopleListComponent,
    PersonComponent
  ],
  imports: [       // Module related stuff
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
