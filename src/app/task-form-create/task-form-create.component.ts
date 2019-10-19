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

  constructor(private clientService:ClientService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { 

              }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(p => {
      debugger;
      this.clientName = p.client
    });

     this.activatedRoute.params.subscribe(p => {
      debugger; 
      this.clientId = p['id'],
      this.taskId = p['taskId']
    });
     if(this.taskId == null){
       debugger;
       this.resetForm();
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
    //debugger;
   
    this.formData = {
      id : form.value.id,
      description:form.value.description,
      clientAddress:form.value.clientAddress,
      taskName:form.value.taskName,
      startTime:form.value.startTime,
      endTime:form.value.endTime,
      clientId: this.clientId
    }
    this.clientService.postTask(this.formData).subscribe(

      res => { this.resetForm(form)},
      err => {console.log(err) }
    )

    this.router.navigateByUrl("/clients/" + this.clientId + "/tasks");
  }

  populateForm(){
    debugger;
     this.clientService.getTaskById(this.clientId, this.taskId).subscribe(
      res => { 
        this.clientService.formData.startTime = res.startTime;
        this.clientService.formData.endTime = "2017-06-13T13:00";
       }
    )
  }
}

