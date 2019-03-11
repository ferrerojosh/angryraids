import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { merge, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Hero } from '../../modules/kings-raid/models/hero.model';
import { HeroService } from '../../modules/kings-raid/services/hero.service';

/**
 * Component that does all the overhead for searching heroes.
 * Will take an array of {@link Hero} inputs and magically constructs
 * you a very nice search component.
 */
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSearchComponent {

  @Input()
  heroes: Hero[];

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

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => this.heroes.filter(v => v.name
        .toLowerCase()
        .indexOf(term.toLowerCase()) > -1)
        .slice(0, 6),
      ));
  }
}
