import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, Observable, Subscription } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { EquipmentInfo } from '../../modules/kings-raid/models/equipment-info.model';
import { EquipmentHelper } from '../../modules/kings-raid/services/equipment.helper';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EquipmentComponent implements OnInit, OnDestroy {

  @Input()
  equipments: EquipmentInfo[];

  helper: EquipmentHelper;
  tier = new FormControl();
  rating = new FormControl(0);
  equipment = new FormControl();
  // Streams
  availableTiers$: Observable<number[]>;
  equipmentByTier$: Observable<EquipmentInfo[]>;
  // Subscriptions
  availableTierSubscription: Subscription;

  ngOnInit() {
    this.helper = new EquipmentHelper(this.equipments);
    this.availableTiers$ = this.helper.listAvailableTiers().pipe(
      map(t => t.reverse())
    );
    // Emits when available tiers are loaded, typically the first one to emit
    const defaultEquipmentByTier = this.availableTiers$.pipe(
      map(t => t[0]),
      switchMap(t => this.helper.listByTier(t)),
      tap(x => this.equipment.setValue(x[0])),
    );
    // Emits when tier values are changed, typically emits when user changes tier value
    const changedEquipmentByTier = this.tier.valueChanges.pipe(
      switchMap(t => this.helper.listByTier(t)),
      tap(x => this.equipment.setValue(x[0])),
    );
    // Merge both default and change emissions into one big happy family
    this.equipmentByTier$ = merge(defaultEquipmentByTier, changedEquipmentByTier);
    // Subscribe to first emission of available tiers
    this.availableTierSubscription = this.availableTiers$.subscribe(tiers => {
      this.tier.setValue(tiers[0]);
    });
    this.equipment.valueChanges.subscribe(e => console.log(e));
  }

  ngOnDestroy() {
    // Cleanup
    this.availableTierSubscription.unsubscribe();
  }


}
