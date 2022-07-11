import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ScheduleEmailsFrontEnd';
  name  = localStorage.getItem('userName')
  number = Math.floor(Math.random() *5)+1;  
}
