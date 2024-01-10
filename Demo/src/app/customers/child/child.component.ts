import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input('age')
  age: number = 0;
  
  @Output()
  sendData = new EventEmitter();

  userName: string = '';
  
  getName() {
    this.sendData.emit(this.userName)
  }
}
