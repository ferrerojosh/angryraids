import {Component, Input, OnInit} from '@angular/core';
import { Hero } from '../../modules/kings-raid/models/hero.model';

@Component({
  selector: 'app-hero-stats',
  templateUrl: './hero-stats.component.html',
  styleUrls: ['./hero-stats.component.styl']
})
export class HeroStatsComponent implements OnInit {

  @Input()
  heroes: Hero[];
  constructor() { }

  ngOnInit() {
  }

  heroOnClick(){

  }
}
