import { Highlightable } from '@angular/cdk/a11y';
import { Component, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

/**
 * @description
 * A very simple implementation of an auto complete item.
 */
@Component({
  selector: 'app-auto-complete-item',
  templateUrl: './auto-complete-item.component.html',
  styleUrls: ['./auto-complete-item.component.styl']
})
export class AutoCompleteItemComponent implements Highlightable, OnChanges {

  @HostBinding('class.active')
  isActive = false;

  /**
   * The string that is being focused upon, it is shown in bold text.
   */
  @Input()
  focused: string;
  /**
   * The string that is not focused, not in bold.
   */
  @Input()
  value: string;
  /**
   * Whether the option is disabled.
   */
  @Input()
  disabled: boolean;

  /** Gets the label for this option. */
  getLabel?(): string {
    return this.focused + this.value;
  }

  setActiveStyles() {
    this.isActive = true;
  }

  setInactiveStyles() {
    this.isActive = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.isActive = false;
  }
}
