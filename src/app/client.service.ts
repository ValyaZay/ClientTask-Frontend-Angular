import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private base: string = "http://localhost:11435/api/v1";
  formData:Task = {
    id: 0,
    taskName:'',
    description:'',
    clientAddress:'',
    startTime:'',
    endTime:'',
    clientId:0
  };

  constructor(private http: HttpClient) { }

  getClients() : Observable<any> {
    return this.http.get(this.base + "/clients");
  }

  getTasksByClientId(id:string) : Observable<any>{
    debugger;
    return this.http.get(this.base + "/clients/" + id + "/tasks")
  }

  getClientById(id:string | number) : Observable<any>{
    return this.http.get(this.base + "/clients/" + id)
  }

  postTask(formData:Task){
    return this.http.post(this.base + "/clients/" + formData.clientId + "/tasks", formData)
  }

  putTask(formData:Task){
    return this.http.put(this.base + "/clients/" + formData.clientId + "/tasks/" + formData.id, formData)
  }

  getTaskById(clientId:number, taskId:number) : Observable<any>{
    return this.http.get(this.base + "/clients/" + clientId + "/tasks/" + taskId)
  }

  deleteTask(taskId:number, clientId:number){
    debugger;
    return this.http.delete(this.base + "/clients/" + clientId + "/tasks/" + taskId);
  }
}
