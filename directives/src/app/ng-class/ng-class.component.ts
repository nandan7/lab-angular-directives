import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css'],
})
export class NgClassComponent implements OnInit {
  color: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  changeColor(): void {
    this.color = true;
  }
}
