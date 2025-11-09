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
  displaytwo = true;
  x=10;

  colors:any;

  TOGGLE(){
    this.display =! this.display;
  }
  Hiddee(){
    this.display = false;
  }
  showww(){
    this.display =true;
  }
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

  toggletwo(){
    this.displaytwo =! this.displaytwo;
  }

  getcolorinput(val: number){
    this.colors = val;
  }

  handlecolor(event:Event){
    this.colors = parseInt((event.target as HTMLInputElement).value);
  }
}