import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: [ './auto-complete.component.styl' ]
})
export class AutoCompleteComponent implements OnInit, OnDestroy {

  @Input()
  placeholder = '';

  autoCompleteForm = new FormGroup({
    searchInput: new FormControl(''),
  });
  valueChangesSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    this.valueChangesSubscription = this.autoCompleteForm.valueChanges
      .subscribe(value => this.onValueChange(value.searchInput));
  }

  ngOnDestroy() {
    this.valueChangesSubscription.unsubscribe();
  }

  onValueChange(value) {
    console.log(value);
  }
}
