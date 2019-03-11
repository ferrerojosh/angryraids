import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { EquipmentInfo } from '../../modules/kings-raid/models/equipment-info.model';
import { Hero } from '../../modules/kings-raid/models/hero.model';
import { EquipmentService } from '../../modules/kings-raid/services/equipment.service';
import { HeroService } from '../../modules/kings-raid/services/hero.service';

/**
 * Media queries for Bootstrap 4 breakpoints.
 * @see https://getbootstrap.com/docs/4.3/layout/overview/#responsive-breakpoints
 */
const BootstrapBreakpoints = {
  // Small devices (landscape phones, 576px and up)
  SM: '(min-width: 576px) and (max-width: 767.98px)',
  // Medium devices (tablets, 768px and up)
  MD: '(min-width: 768px) and (max-width: 991.98px)',
  // Large devices (desktops, 992px and up)
  LG: '(min-width: 992px) and (max-width: 1199.98px)',
  // Extra large devices (large desktops, 1200px and up)
  XL: '(min-width: 1200px)',
};

/**
 * The component that handles the entire simulation of equipments.
 */
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

  // To support mobile devices, we should detect the orientation
  // and change the mode of the tabs
  orientation = 'horizontal';
  tabType = 'tabs';
  // Observable data for our components to listen on
  heroName$: Observable<string>;
  hero$: Observable<Hero>;
  heroes$: Observable<Hero[]>;
  armor$: Observable<EquipmentInfo[]>;
  weapon$: Observable<EquipmentInfo[]>;
  secondaryArmor$: Observable<EquipmentInfo[]>;
  orb$: Observable<EquipmentInfo[]>;
  accessory$: Observable<EquipmentInfo[]>;

  ngOnInit(): void {
    this.heroes$ = this.heroService.findAll();
    this.hero$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('id')),
      switchMap(id => this.heroService.find(id)),
    );
    this.armor$ = this.hero$.pipe(
      switchMap(h => this.equipment.findByTypeAndClass('armor', h.classInfo.name))
    );
    this.weapon$ = this.hero$.pipe(
      switchMap(h => this.equipment.findByTypeAndClass('weapon', h.classInfo.name))
    );
    this.secondaryArmor$ = this.hero$.pipe(
      switchMap(h => this.equipment.findByTypeAndClass('secondary-armor', h.classInfo.name))
    );
    this.orb$ = this.hero$.pipe(
      switchMap(() => this.equipment.findByTypeAndClass('orb', 'all'))
    );
    this.accessory$ = this.hero$.pipe(
      switchMap(() => this.equipment.findByTypeAndClass('accessory', 'all'))
    );
    this.heroName$ = this.hero$.pipe(
      switchMap(h => h.name),
    );
    // Change orientations when everything matches the required breakpoints
    // for both vertical (mobile + tablet) and horizontal (desktop) orientations.
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
    // We don't record this in the history, instead, replace the URL since we're not facebook
    await this.router.navigate(['/hero', hero.id], { replaceUrl: true });
  }
}
