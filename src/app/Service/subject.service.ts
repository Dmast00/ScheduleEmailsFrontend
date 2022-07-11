import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private EmailList =  new Subject<any>();

  constructor() { }

  sendUpdate(message: string) { //the component that wants to update something, calls this fn
    this.EmailList.next({ text: message }); //next() will feed the value in Subject
}

  getUpdate(): Observable<any> { //the receiver component calls this function 
      return this.EmailList.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
  }
}
