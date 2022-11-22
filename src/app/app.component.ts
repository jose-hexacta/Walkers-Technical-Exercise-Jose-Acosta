import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  numbers: number[] = [];
  maxNumber: number = 0;
  pageAcumulator: number = 0;
  showNext20:boolean = false;

  setMaxNumber() {
    this.numbers = Array.from(Array(this.maxNumber).keys());
    this.pageAcumulator = 0;
    this.next20();
  }

  next20() {
    this.pageAcumulator += 20;
    this.showNext20 = this.pageAcumulator < this.maxNumber;
  }
}
