import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() number!: number;
  showWalkers: boolean = false;
  showssessment: boolean = false;
  isMonday: boolean = false;

  ngOnInit(): void {
    this.showWalkers = this.number % 3 === 0
    this.showssessment = this.number % 5 === 0
    this.isMonday = (new Date()).getDay() === 1;
  }
}
