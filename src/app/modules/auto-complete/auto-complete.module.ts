import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteItemComponent } from './components/auto-complete-item/auto-complete-item.component';
import { AutoCompleteComponent } from './containers/auto-complete/auto-complete.component';

/**
 * @description
 * A simple auto complete module, which you can use anywhere in this project.
 *
 * @usageNotes
 * You can use this module on any other project but make sure you modify the styles as
 * it is currently tightly coupled with this project's styles.
 */
@NgModule({
  declarations: [
    AutoCompleteItemComponent,
    AutoCompleteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    AutoCompleteComponent
  ]
})
export class AutoCompleteModule {}
