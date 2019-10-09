import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  private base: string = "http://localhost:11435/api/v1";
  clientList: Client[] = [];

  constructor(private http: HttpClient) { }

  

}


