import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from '../../modules/kings-raid/models/hero.model';
import { HeroService } from '../../modules/kings-raid/services/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
})
export class HomeComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  constructor(
    private readonly router: Router,
    private readonly heroService: HeroService
  ) {
  }

  ngOnInit() {
    this.heroes$ = this.heroService.findAll();
  }

  async onHeroSelected(hero: Hero) {
    await this.router.navigate(['/hero', hero.id]);
  }
}
