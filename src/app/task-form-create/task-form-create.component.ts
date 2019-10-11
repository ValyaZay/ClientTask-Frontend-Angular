import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-form-create',
  templateUrl: './task-form-create.component.html',
  styleUrls: ['./task-form-create.component.css']
})
export class TaskFormCreateComponent implements OnInit {
  clientId:string;
  clientName:string = "xcxcx";

  constructor(private clientService:ClientService,
              private activatedRoute:ActivatedRoute) { 

              }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(p => {
      debugger;
      this.clientName = p.client});


    
  }

}
