import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demo';

  login(){
    localStorage.setItem("user","hhhh");
  }
  logout(){
    localStorage.removeItem("user");
  }
}
