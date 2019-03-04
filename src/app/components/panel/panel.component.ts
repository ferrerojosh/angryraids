import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.styl'],
})
export class PanelComponent {
  @Input()
  title: string;
}
