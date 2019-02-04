import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../modules/kings-raid/models/hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.styl']
})
export class HeroListComponent implements OnInit {

  @Input()
  heroes: Hero[];

  constructor() { }

  ngOnInit() {
  }

}
