import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rune-selector',
  templateUrl: './rune-selector.component.html',
  styleUrls: ['./rune-selector.component.styl']
})
export class RuneSelectorComponent implements OnInit {

  @Input()
  runes = 1;

  get runeCount() {
    return Array(this.runes).fill(0);
  }

  ngOnInit() {
  }

}
