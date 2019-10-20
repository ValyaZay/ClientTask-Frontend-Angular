import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-form-create',
  templateUrl: './task-form-create.component.html',
  styleUrls: ['./task-form-create.component.css']
})
export class TaskFormCreateComponent implements OnInit {
  clientId:number;
  clientName:string = "";
  currentUrl:string;
  taskId:number;

  headingCreate:string;
  headingUpdate:string;

  constructor(private clientService:ClientService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { 

              }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(p => {
      debugger;
      this.clientName = p.client
    });
    
    this.headingCreate = "Create new Task for " + this.clientName;
    this.headingUpdate = "Update Task";

    this.activatedRoute.params.subscribe(p => {
      debugger; 
      this.clientId = p['id'],
      this.taskId = p['taskId']
    });
     if(this.taskId == null){
       debugger;
       this.resetForm();
       this.taskId = 0;
     }
     else{
       debugger;
       this.populateForm();
     }
      
      
  }

  resetForm(form?:NgForm){
    if(form != null){
      form.resetForm();
    }
    this.clientService.formData={
      id : 0,
      description:'',
      clientAddress:'',
      taskName:'',
      startTime:'',
      endTime:'',
      clientId: this.clientId
    }
  }

  formData:Task;

  onSubmit(form:NgForm){
    debugger;
   
    this.formData = {
      id : this.taskId,
      description:form.value.description,
      clientAddress:form.value.clientAddress,
      taskName:form.value.taskName,
      startTime:form.value.startTime,
      endTime:form.value.endTime,
      clientId: this.clientId
    }

    if(this.taskId == 0){
      debugger;
      this.clientService.postTask(this.formData).subscribe(

      res => { this.router.navigateByUrl("/clients/" + this.clientId + "/tasks");},
      err => {console.log(err) }
    );
    

    }else{
      this.clientService.putTask(this.formData).subscribe(

      res => { this.router.navigateByUrl("/clients/" + this.clientId + "/tasks"); },
      err => {console.log(err) }
    );
    
  }
   
  }

  populateForm(){
    debugger;
     this.clientService.getTaskById(this.clientId, this.taskId).subscribe(
      res => { 
        this.clientService.formData = res;
        }
    )
  }
}

