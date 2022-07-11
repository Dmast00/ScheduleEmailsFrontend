import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from '../backend.service';
import { SubjectService } from '../Service/subject.service';


@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {
  form : FormGroup

  
  constructor(private service : BackendService,private subject : SubjectService) { 
    this.form = new FormGroup({
      fromEmail : new FormControl(),
      toEmail : new FormControl(),
      subjectEmail : new FormControl(),
      PlainTextContent : new FormControl(),
      HtmlContent : new FormControl()
    })
  }

  ngOnInit(): void {

  }
  get f(){
    return this.form.controls
  }

  async SendEmail(){
    console.log(this.form.value)
    await this.service.SendEmail(this.form.value).subscribe(data =>{
      this.sendMessage()
      console.log('Email Sent')
    })
    
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  sendMessage():void {
    this.subject.sendUpdate('Update List')
  }

}
