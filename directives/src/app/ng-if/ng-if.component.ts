import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css'],
})
export class NgIfComponent implements OnInit {
  showInfo: boolean = false;

  constructor() {}
  ngOnInit(): void {}
  showData(): void {
    this.showInfo = true;
  }
  hideData(): void {
    this.showInfo = false;
  }
}
