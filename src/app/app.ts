import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { Appcounter } from './appcounter/appcounter';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Profile,Appcounter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  name =""
  displayName="";
  email="";
  display = true;
  x=2;
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