import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EquipmentInfo } from '../../modules/kings-raid/models/equipment-info.model';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EquipmentComponent implements OnInit {

  @Input()
  equipments: EquipmentInfo[];

  tier = new FormControl();
  rating = new FormControl();
  equipment = new FormControl();

  ngOnInit() {

  }

}
