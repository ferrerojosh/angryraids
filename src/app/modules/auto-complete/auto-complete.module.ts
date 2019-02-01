import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteItemComponent } from './components/auto-complete-item/auto-complete-item.component';
import { AutoCompleteComponent } from './containers/auto-complete/auto-complete.component';

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
