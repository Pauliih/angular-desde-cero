import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-click',
  templateUrl: './ng-if-click.component.html',
  styleUrls: ['./ng-if-click.component.css']
})
export class NgIfClickComponent implements OnInit {
  show: boolean = true;
  
  constructor() {
   }

  ngOnInit() {
  }

}
