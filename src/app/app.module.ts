import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToDoListComponentComponent } from './to-do-list-component/to-do-list-component.component';
import { TaskComponentComponent } from './task-component/task-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponentComponent,
    TaskComponentComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
