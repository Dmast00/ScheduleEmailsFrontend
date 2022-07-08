import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private readonly api_URL = 'https://localhost:44316/api/'
  constructor(private readonly http : HttpClient) { }

  SendEmail(Email : any){
    return this.http.post(this.api_URL+'Emails',Email)
  }

  getEmails(){
    return this.http.get(this.api_URL+'Emails')
  }

}
