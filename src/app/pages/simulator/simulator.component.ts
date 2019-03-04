import { Component, OnInit } from '@angular/core';
import { Hero } from '../../modules/kings-raid/models/hero.model';
import { HeroService } from '../../modules/kings-raid/services/hero.service';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.styl'],
})
export class SimulatorComponent implements OnInit {

  heroList: Hero[];

  constructor(
    private readonly heroService: HeroService,
  ) {
  }

  ngOnInit() {
    this.heroList = this.heroService.retrieveAllHeroes();
  }

}
