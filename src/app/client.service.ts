import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private base: string = "http://localhost:11435/api/v1";
  formData:Task;

  constructor(private http: HttpClient) { }

  getClients() : Observable<any> {
    return this.http.get(this.base + "/clients");
  }
}
