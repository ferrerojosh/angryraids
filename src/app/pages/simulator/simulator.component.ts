import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../modules/kings-raid/models/hero.model';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.styl'],
})
export class SimulatorComponent {

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
  }

  async onHeroSelected(hero: Hero) {
    await this.router.navigate(['/hero', hero.id]);
  }
}
