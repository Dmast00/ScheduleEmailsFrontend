
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BackendService } from '../backend.service';
import { SubjectService } from '../Service/subject.service';

@Component({
  selector: 'app-emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.css']
})
export class EmailsListComponent implements OnInit {
  EmailList : any = []
  private subscriptionEmail : Subscription;

  constructor(private service : BackendService, private subject : SubjectService) {
    this.subscriptionEmail = this.subject.getUpdate().subscribe(data =>{
      this.getEmails();
      console.log('Receive message')
    })
   }

  ngOnInit(): void {
    this.getEmails();
  }


  getEmails(){
    this.service.getEmails().subscribe(data =>{
      this.EmailList = data
      console.log(this.EmailList)
    })
  }
}
