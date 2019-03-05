import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EquipmentInfo } from '../../modules/kings-raid/models/equipment-info.model';

@Component({
  selector: 'app-equipment-selector',
  templateUrl: './equipment-selector.component.html',
  styleUrls: ['./equipment-selector.component.styl'],
})
export class EquipmentSelectorComponent implements OnInit, OnDestroy {

  @Input()
  equipments: EquipmentInfo[];

  get equipmentsByTier(): EquipmentInfo[] {
    return this.equipments.filter(e => e.tier === this.tier);
  }

  get availableTiers(): Set<number> {
    return new Set(this.equipments.map(e => e.tier));
  }

  tier: number;
  tierSubscription: Subscription;

  equipmentForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.equipmentForm = this.fb.group({
      tier: null,
      rating: 5,
      equipment: null,
    });
    // Detect value changes
    this.tierSubscription = this.equipmentForm.controls.tier.valueChanges.subscribe(tier => {
      this.tier = tier;
      this.equipmentForm.patchValue({
        equipment: this.equipmentsByTier[this.equipmentsByTier.length - 1].name,
      });
    });
    const arrTiers = Array.from(this.availableTiers.values());
    this.equipmentForm.patchValue({
      tier: arrTiers[arrTiers.length - 1],
    });
  }

  ngOnDestroy() {
    this.tierSubscription.unsubscribe();
  }

}
