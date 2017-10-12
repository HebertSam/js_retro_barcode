import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // colors = ["green", "red", 'blue', "yellow"]
  // rand = Math.floor(Math.random()* this.colors.length);
  randColor(){
    let colors = ["green", "red", 'blue', "yellow"]
    let rand = Math.floor(Math.random()* colors.length);
    return colors[rand];
  }

}