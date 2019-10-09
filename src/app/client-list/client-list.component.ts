import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  public clientList:Client[] = [];

  constructor( private _clientService:ClientService,
                private _router:Router,
                private _route:ActivatedRoute ) { }

  ngOnInit() {
debugger;
   this._clientService.getClients()
                      .subscribe( (clientList:Client[]) => {
                        this.clientList = clientList;
                      });
  }

}
