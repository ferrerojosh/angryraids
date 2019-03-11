import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EquipmentInfo } from '../../modules/kings-raid/models/equipment-info.model';
import { Hero } from '../../modules/kings-raid/models/hero.model';
import { EquipmentService } from '../../modules/kings-raid/services/equipment.service';
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
    private readonly equipment: EquipmentService,
  ) {
  }

  orientation = 'horizontal';
  tabType = 'tabs';
  heroName$: Observable<string>;
  hero$: Observable<Hero>;
  armor$: Observable<EquipmentInfo[]>;
  weapon$: Observable<EquipmentInfo[]>;
  secondaryArmor$: Observable<EquipmentInfo[]>;
  orb$: Observable<EquipmentInfo[]>;
  accessory$: Observable<EquipmentInfo[]>;

  ngOnInit(): void {
    this.hero$ = this.route.paramMap.pipe(
      map((params: ParamMap) => this.heroService.retrieveHero(params.get('id'))),
    );
    this.armor$ = this.hero$.pipe(
      map(h => this.equipment.retrieveByClassAndType('armor', h.classInfo.name))
    );
    this.weapon$ = this.hero$.pipe(
      map(h => this.equipment.retrieveByClassAndType('weapon', h.classInfo.name))
    );
    this.secondaryArmor$ = this.hero$.pipe(
      map(h => this.equipment.retrieveByClassAndType('secondary-armor', h.classInfo.name))
    );
    this.orb$ = this.hero$.pipe(
      map(() => this.equipment.retrieveByClassAndType('orb', 'all'))
    );
    this.accessory$ = this.hero$.pipe(
      map(() => this.equipment.retrieveByClassAndType('accessory', 'all'))
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
      Breakpoints.WebLandscape,
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
