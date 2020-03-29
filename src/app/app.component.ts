import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Darko';
  messages = new Array();
 
  onNewMessage(messageData:{message:string}){
      this.messages.push(messageData.message)
  }
}
