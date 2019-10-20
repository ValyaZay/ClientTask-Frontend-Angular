import { Component, OnInit} from '@angular/core';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  
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
                                                            debugger;
                                                            this.clientService.getClientById(this.clientId)
                                                      .subscribe((client:Client) => {
                                                            this.clientName = client.firstName;
                                                      });
                                                            });
                                      
                                    }

      });
    
  }

  
  // getClientIdFromUrl() : string {
  //   let lastSlashIndex = this.currentUrl.lastIndexOf("/");
  //   let preLastSlashIndex = this.currentUrl.substring(0, lastSlashIndex-1).lastIndexOf("/");
  //   this.clientId = this.currentUrl.substring(preLastSlashIndex+1, lastSlashIndex);
  //   //console.log(this.clientId);
  //   return this.clientId;

  // }

  getClientIdFromUrl() : string {
    let firstSlashIndex = this.currentUrl.indexOf("/");
    let clientSegment = this.currentUrl.substring(firstSlashIndex+1);

    let secondSlashIndex = clientSegment.indexOf("/");
    let idSegment = clientSegment.substring(secondSlashIndex + 1);

    let thirdSlashIndex = idSegment.indexOf("/");
    if(thirdSlashIndex == null){
      this.clientId = idSegment;
    }else{
      this.clientId = idSegment.substring(0, thirdSlashIndex);
    }
    return this.clientId;

  }

  ngOnInit() {
    this.clientId = this.getClientIdFromUrl();
debugger;
    this.clientService.getTasksByClientId(this.clientId).subscribe(t => {
      this.taskList = t;
    });
      
      this.clientService.getClientById(this.clientId).subscribe((client:Client) => {
                                                      this.clientName = client.firstName;
                                                      });
      
  }

  populateForm(task:Task){
    debugger;
    this.router.navigateByUrl('/clients/' + task.clientId + '/tasks/' + task.id + "/edit");

  }

  deleteTask(id:number, clientId:number){
    if(confirm("Are you sure to delete this task?")){
      this.clientService.deleteTask(id, clientId).subscribe(
      res => { this.router.navigateByUrl("/clients/" + this.clientId + "/tasks"); }
    )
    }
    
  }

   
}
