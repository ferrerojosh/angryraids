import { Component, Input } from '@angular/core';

/**
 * @description
 * A very simple implementation of an auto complete item.
 */
@Component({
  selector: 'app-auto-complete-item',
  templateUrl: './auto-complete-item.component.html',
  styleUrls: ['./auto-complete-item.component.styl']
})
export class AutoCompleteItemComponent {
  /**
   * The string that is being focused upon, it is shown in bold text.
   */
  @Input()
  focused;
  /**
   * The string that is not focused, not in bold.
   */
  @Input()
  value;
}
