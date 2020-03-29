import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-console-input',
  templateUrl: './console-input.component.html',
  styleUrls: ['./console-input.component.css']
})
export class ConsoleInputComponent implements OnInit {
  newMessage:string = '';

  @Output() messageCreated = new EventEmitter<{message:string}>();
  
  constructor() { }

  onSendMessage(){
    this.messageCreated.emit({message:this.newMessage});
    this.newMessage = ''
  }

  onClearMessage(){
    this.newMessage = ''
  }

  ngOnInit() {
  }

}
