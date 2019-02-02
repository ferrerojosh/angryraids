import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { Component, HostListener, Input, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AutoCompleteItemComponent } from '../../components/auto-complete-item/auto-complete-item.component';

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

  @ViewChildren(AutoCompleteItemComponent)
  autoCompleteItems: QueryList<AutoCompleteItemComponent>;

  listKeyManager: ActiveDescendantKeyManager<AutoCompleteItemComponent>;

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
          .indexOf(this.value.toLowerCase()) >= 0 &&
        c !== this.value
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
    this.listKeyManager = new ActiveDescendantKeyManager(this.autoCompleteItems);
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

  onItemKeyup($event: KeyboardEvent) {
    $event.stopImmediatePropagation();
    switch ($event.key) {
      case 'ArrowDown':
      case 'ArrowUp':
        this.listKeyManager.onKeydown($event);
        break;
      case 'Enter':
        if (this.listKeyManager.activeItem) {
          const label = this.listKeyManager.activeItem.getLabel();
          this.autoCompleteForm.setValue({
            searchInput: label
          });
        }
        break;
      default:
        break;
    }
  }
}
