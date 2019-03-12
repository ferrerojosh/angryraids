import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, merge, Observable, Subscription } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { EquipmentInfo } from '../../modules/kings-raid/models/equipment-info.model';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EquipmentComponent implements OnInit, OnDestroy {

  private equipments$ = new BehaviorSubject<EquipmentInfo[]>([]);

  tier = new FormControl();
  rating = new FormControl(0);
  equipment = new FormControl();
  // Streams
  availableTiers$: Observable<number[]>;
  equipmentByTier$: Observable<EquipmentInfo[]>;
  // Subscriptions
  availableTierSubscription: Subscription;

  @Input()
  set equipments(value: EquipmentInfo[]) {
    this.equipments$.next(value);
  }

  ngOnInit() {
    // Map to each tier, then filter distinct then reverse the array
    this.availableTiers$ = this.equipments$.pipe(
      map(e => e.map(i => i.tier)),
      map(x => x.filter((v, i, a) => a.indexOf(v) === i)),
      map(t => t.reverse()),
    );
    // Emits when available tiers are loaded, typically the first one to emit
    const defaultEquipmentByTier = this.availableTiers$.pipe(
      map(t => t[0]),
      switchMap(t => this.equipments$.pipe(
        map(x => x.filter(e => e.tier === t)),
      )),
      tap(x => this.equipment.setValue(x[0])),
    );
    // Emits when tier values are changed, typically emits when user changes tier value
    const changedEquipmentByTier = this.tier.valueChanges.pipe(
      switchMap(t => this.equipments$.pipe(
        map(x => x.filter(e => e.tier === t)),
      )),
      tap(x => this.equipment.setValue(x[0])),
    );
    // Merge both default and change emissions into one big happy family
    this.equipmentByTier$ = merge(defaultEquipmentByTier, changedEquipmentByTier);
    // Subscribe to first emission of available tiers
    this.availableTierSubscription = this.availableTiers$.subscribe(tiers => {
      this.tier.setValue(tiers[0]);
    });
  }

  ngOnDestroy() {
    // Cleanup
    this.availableTierSubscription.unsubscribe();
  }

}
