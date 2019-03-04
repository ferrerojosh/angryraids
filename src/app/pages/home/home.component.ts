import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../modules/kings-raid/services/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
})
export class HomeComponent implements OnInit {

  heroList: string[];

  constructor(
    private readonly heroService: HeroService,
  ) {
  }

  ngOnInit() {
    this.heroList = this.heroService.retrieveAllHeroes()
      .map(h => h.name);
  }

}
