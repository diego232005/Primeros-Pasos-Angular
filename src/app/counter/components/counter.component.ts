import { Component} from '@angular/core';
@Component({
  selector: 'app-counter',
  template: `<h3>Counter:{{ counter}}</h3>
  <button (click)="incrementarValor(1)">+1</button>
  <button (click)="incrementarValor(-1)">-1</button>
  <button (click)="reset()">reset</button>`
})

export class CounterComponent  {
     public counter:number = 10;

  incrementarValor(value:number):void {
    this.counter += value;

  }

  reset(){
    this.counter = 10;
  }

}
