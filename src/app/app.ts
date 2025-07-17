import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count: number = 0;

  // handleIncrement(){
  //   this.count = this.count + 1
  // }

  // handleDecrement(){
  //   this.count = this.count-1
  // }

  // handleReset(){
  //   this.count= 0
  // }

  handleCounter(val:string){
    if(val == 'minus'){
      if(this.count > 0){
      this.count = this.count -1 
      }
    }
    else if( val == 'plus'){
      this.count = this.count +1
    }
    else{
      this.count = 0
    }
  }
}
