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

  constructor(private clientService:ClientService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.clientId = this.activatedRoute.snapshot.params['id'];
    debugger;
    console.log(this.clientId);
  }

}
