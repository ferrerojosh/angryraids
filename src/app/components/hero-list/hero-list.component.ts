import { Component, Input } from '@angular/core';
import { Hero } from '../../modules/kings-raid/models/hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.styl'],
})
export class HeroListComponent {
  @Input()
  heroes: Hero[];
}
