import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListComponent } from './client-list/client-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ClientService } from './client.service';
import { TaskFormCreateComponent } from './task-form-create/task-form-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    TaskListComponent,
    TaskFormCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
