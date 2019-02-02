import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-complete-item',
  templateUrl: './auto-complete-item.component.html',
  styleUrls: ['./auto-complete-item.component.styl']
})
export class AutoCompleteItemComponent implements OnInit {

  @Input()
  focused;
  @Input()
  value;

  constructor() { }

  ngOnInit() {
  }

}
