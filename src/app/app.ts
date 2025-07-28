import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  name =""
  displayName="";
  email="";
  getName(event:Event){
    const val=(event.target as HTMLInputElement).value
    this.name = val;
}
  showName(){
    this.displayName = this.name
  }
  setName(){
    this.name="Sam"
  }
  getEmail(val:string){
    this.email = val;
  }
  setEmail(){
    this.email= "naman@gmail.com"
  }
}