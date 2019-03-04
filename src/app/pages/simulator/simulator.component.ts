import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hero } from '../../modules/kings-raid/models/hero.model';
import { HeroService } from '../../modules/kings-raid/services/hero.service';

const BootstrapBreakpoints = {
  SM: '(min-width: 576px) and (max-width: 767.98px)',
  MD: '(min-width: 768px) and (max-width: 991.98px)',
  LG: '(min-width: 992px) and (max-width: 1199.98px)',
  XL: '(min-width: 1200px)',
};

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.styl'],
})
export class SimulatorComponent implements OnInit {

  constructor(
    private readonly heroService: HeroService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly breakpointObserver: BreakpointObserver,
  ) {
  }

  orientation = 'horizontal';
  tabType = 'tabs';
  heroName$: Observable<string>;
  hero$: Observable<Hero>;

  ngOnInit(): void {
    this.hero$ = this.route.paramMap.pipe(
      map((params: ParamMap) => this.heroService.retrieveHero(params.get('id'))),
    );
    this.heroName$ = this.hero$.pipe(
      map(h => h.name),
    );
    this.breakpointObserver.observe([
      BootstrapBreakpoints.LG,
      Breakpoints.WebPortrait,
      Breakpoints.Handset,
      Breakpoints.Tablet,
    ]).subscribe(result => {
      if (result.matches) {
        this.orientation = 'vertical';
        this.tabType = 'pills';
      }
    });
    this.breakpointObserver.observe([
      BootstrapBreakpoints.XL,
      Breakpoints.WebLandscape
    ]).subscribe(result => {
      if (result.matches) {
        this.orientation = 'horizontal';
        this.tabType = 'tabs';
      }
    });
  }

  async onHeroSelected(hero: Hero) {
    await this.router.navigate(['/hero', hero.id]);
  }
}
