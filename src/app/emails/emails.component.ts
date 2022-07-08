import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {
  form : FormGroup
  
  constructor(private service : BackendService) { 
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

  SendEmail(){
    console.log(this.form.value)
    this.service.SendEmail(this.form.value).subscribe(data =>{
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

}
