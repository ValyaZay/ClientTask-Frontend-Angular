import { Component, OnInit} from '@angular/core';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  

  constructor(private clientService:ClientService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { }

  clientId:number;
  
  
  ngOnInit() {
    this.clientId = this.activatedRoute.snapshot.params['id'];
        debugger;
        console.log(this.clientId);
  }

   
}
