import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  heroList = [
    'Aselica',
    'Lilia',
    'Laias',
    'Aisha',
    'Phillop',
    'Selene'
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
