import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

/**
 * @description
 * An simple reactive auto complete component.
 */
@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.styl']
})
export class AutoCompleteComponent implements OnInit, OnDestroy {

  /**
   * Component placeholder text.
   */
  @Input()
  placeholder = '';
  /**
   * The array of data strings to be filtered.
   */
  @Input()
  data: string[];

  focused = false;
  value = '';

  autoCompleteForm = new FormGroup({
    searchInput: new FormControl(''),
  });
  valueChangesSubscription: Subscription;

  ngOnInit() {
    // Listen to input value changes
    this.valueChangesSubscription = this.autoCompleteForm.valueChanges
      .subscribe(value => this.onValueChange(value.searchInput));
  }

  /**
   * Returns the focused string based on the component's input value.
   * @param str the string to check on
   */
  focusedStr(str): string {
    return str.substr(0, this.value.length);
  }

  /**
   * Returns the unfocused string based on the component's input value.
   * @param str the string to check on
   */
  unfocusedStr(str): string {
    return str.substr(this.value.length);
  }

  /**
   * Returns the filtered data based on user input.
   *
   * @usageNotes
   * It currently sorts alphabetically, this component can be further improved upon by adding
   * a sorting strategy.
   */
  get filteredData(): string[] {
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

  /**
   * Hides the auto complete list when clicking anywhere on the document.
   */
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
