import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'ClientTaskApp';
  public clientList:Client[] = [];
  public firstClientId:number;

  constructor( private _clientService:ClientService,
    private _router:Router,
    private _route:ActivatedRoute ) { 
      // this._clientService.getClients()
      //                 .subscribe( (clientList:Client[]) => {
      //                     this.firstClientId = clientList[0].id;
      //                     this._router.navigate(['/clients', this.firstClientId, 'tasks']);
      //                 });
    }
    
    
    
    ngOnInit(): void {
      this._clientService.getClients()
                      .subscribe( (clientList:Client[]) => {
                          this.firstClientId = clientList[0].id;
                          this._router.navigate(['/clients', this.firstClientId, 'tasks']);
                      });
       
  }
}
