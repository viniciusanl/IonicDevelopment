import { Component } from '@angular/core';

@Component({
  selector: 'box',
  templateUrl: 'box.html'
})
export class BoxComponent {

  text: string;

  constructor() {
    console.log('Hello BoxComponent Component');
    this.text = 'Hello World';
  }

}
