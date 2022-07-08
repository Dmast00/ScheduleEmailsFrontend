
import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.css']
})
export class EmailsListComponent implements OnInit {
  EmailList : any = []
  constructor(private service : BackendService) { }

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
