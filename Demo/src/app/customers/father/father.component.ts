import { Component } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrl: './father.component.css'
})
export class FatherComponent {
  
  getData2(event: string) {
    alert("来自子组件的值：" + event);
  }
}
