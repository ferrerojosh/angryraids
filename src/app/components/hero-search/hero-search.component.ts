import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { merge, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Hero } from '../../modules/kings-raid/models/hero.model';
import { HeroService } from '../../modules/kings-raid/services/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.styl'],
})
export class HeroSearchComponent {
  constructor(
    // There is really no other choice but to put the service here, turning this one
    // into a semi smart and dumb component. If I have any plan to have other set of heroes to
    // search for, then this will be refactored in a way that it takes an input of heroes instead.
    private readonly heroService: HeroService) {
  }

  @ViewChild(NgbTypeahead)
  instance: NgbTypeahead;

  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  @Input()
  value = '';

  @Output()
  selectedHero = new EventEmitter<Hero>();

  heroImageWebP = (hero: Hero) => `/assets/images/hero/${hero.id}/image.webp`;
  heroImagePng = (hero: Hero) => `/assets/images/hero/${hero.id}/image.png`;

  heroNameFormatter = (hero: Hero) => hero.name;

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;
    const heroes = this.heroService.retrieveAllHeroes();

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => heroes.filter(v => v.name
        .toLowerCase()
        .indexOf(term.toLowerCase()) > -1)
        .slice(0, 6),
      ));
  }
}
