import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-console-output',
  templateUrl: './console-output.component.html',
  styleUrls: ['./console-output.component.css']
})
export class ConsoleOutputComponent implements OnInit {
  @Input('inputMessage') message:string

  constructor() { }

  ngOnInit() {
  
  }

}
