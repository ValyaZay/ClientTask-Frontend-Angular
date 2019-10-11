import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnChanges {
  
currentUrl:string;
clientId:string;
public taskList:Task[] = [];
public taskListCount:number;
public clientName:string;
public errorMessage:string;

  constructor(private clientService:ClientService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { 
    router.events.subscribe(val => {
                                    if(val instanceof NavigationEnd){
                                        debugger;
                                      
                                        this.currentUrl = val.url;
                                        if(this.currentUrl){
                                          this.clientId = this.getClientIdFromUrl();
                                        }
                                      
                                      console.log("client id changed: " + this.clientId);
                                      this.clientService.getTasksByClientId(this.clientId)
                                                      .subscribe( (taskList:Task[]) => {
                                                            this.taskList = taskList;
                                                            debugger;
                                                            this.taskListCount = taskList.length;
                                                            console.log(this.taskListCount);
                                                            });
                                      this.clientService.getClientById(this.clientId)
                                                      .subscribe((client:Client) => {
                                                            this.clientName = client.firstName;
                                                      })
                                    }

      });
    
  }

  
  getClientIdFromUrl() : string {
    let lastSlashIndex = this.currentUrl.lastIndexOf("/");
    let preLastSlashIndex = this.currentUrl.substring(0, lastSlashIndex-1).lastIndexOf("/");
    this.clientId = this.currentUrl.substring(preLastSlashIndex+1, lastSlashIndex);
    //console.log(this.clientId);
    return this.clientId;

  }

  ngOnChanges(){

    
  }
  
  ngOnInit() {
   
        
        
  }

   
}
