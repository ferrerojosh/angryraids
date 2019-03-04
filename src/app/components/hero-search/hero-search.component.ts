import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { HeroService } from '../../modules/kings-raid/services/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.styl'],
})
export class HeroSearchComponent {
  constructor(
    private readonly heroService: HeroService) {
  }

  search = (text$: Observable<string>) => {
    const heroes = this.heroService.retrieveAllHeroes();
    return text$.pipe(
      distinctUntilChanged(),
      map(term => term.length < 2 ? [] : heroes.filter(v => v.name
        .toLowerCase()
        .indexOf(term.toLowerCase()) > -1)
        .slice(0, 10)
        .map(h => h.name)
      ),
    );
  }
}
