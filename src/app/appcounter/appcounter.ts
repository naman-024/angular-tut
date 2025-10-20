import { Component } from '@angular/core';

@Component({
  selector: 'app-appcounter',
  imports: [],
  templateUrl: './appcounter.html',
  styleUrl: './appcounter.css'
})
export class Appcounter {
  count = 0;
  counter(val:string){
    if(val === 'increment'){
      this.count++;
    }
    else if(val === 'reset'){
      this.count = 0;
    }
    else if(val === 'decrement' || this.count < 0 ){
      this.count--;
    }
  }
}
