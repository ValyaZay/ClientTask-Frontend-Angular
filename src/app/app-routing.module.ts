import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskFormCreateComponent } from './task-form-create/task-form-create.component';
import { ClientListComponent } from './client-list/client-list.component';
import { TaskListComponent } from './task-list/task-list.component';


const routes: Routes = [
  { path: 'clients/:id/create-task', component:TaskFormCreateComponent },
  { path: 'clients/:id/tasks', component:TaskListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
