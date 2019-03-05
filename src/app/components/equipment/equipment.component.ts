import { Component, Input, OnInit } from '@angular/core';
import { EquipmentInfo } from '../../modules/kings-raid/models/equipment-info.model';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
})
export class EquipmentComponent implements OnInit {

  @Input()
  equipments: EquipmentInfo[];

  constructor() {
  }

  ngOnInit() {
  }

}
