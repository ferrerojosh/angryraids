import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: [ './auto-complete.component.styl' ]
})
export class AutoCompleteComponent implements OnInit {

  @Input()
  placeholder = '';

  constructor() { }

  ngOnInit() {
  }
}
