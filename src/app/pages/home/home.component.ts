import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../modules/kings-raid/models/hero.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
})
export class HomeComponent {

  constructor(
    private readonly router: Router,
  ) {
  }

  async onHeroSelected(hero: Hero) {
    await this.router.navigate(['/hero', hero.id]);
  }
}
