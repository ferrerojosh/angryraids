import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.styl']
})
export class AutoCompleteComponent implements OnInit, OnDestroy {

  @Input()
  placeholder = '';
  @Input()
  data: string[];
  focused = false;
  value = '';

  autoCompleteForm = new FormGroup({
    searchInput: new FormControl(''),
  });
  valueChangesSubscription: Subscription;

  ngOnInit() {
    this.valueChangesSubscription = this.autoCompleteForm.valueChanges
      .subscribe(value => this.onValueChange(value.searchInput));
  }

  focusedStr(str) {
    return str.substr(0, this.value.length);
  }

  unfocusedStr(str) {
    return str.substr(this.value.length);
  }

  get filteredData() {
    const filteredData = this.data
      .filter(c => c
        .toString()
        .toLowerCase()
        .indexOf(this.value.toLowerCase()) >= 0
      )
      .sort((a, b) => a.localeCompare(b));
    return filteredData.slice(0, 5);
  }

  ngOnDestroy() {
    this.valueChangesSubscription.unsubscribe();
  }

  onValueChange(value) {
    this.value = value;
    this.focused = true;
  }

  @HostListener('document:click')
  onDocumentClick() {
    this.focused = false;
  }

  selectItem(dataItem) {
    this.focused = false;
    this.autoCompleteForm.setValue({
      searchInput: dataItem
    });
  }
}
