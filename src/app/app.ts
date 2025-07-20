import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  handleEvent(event:Event){
    console.log("function called", event.type);
    // console.log("value",(event.target as HTMLInputElement).value);
    
  }
}