import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabComponent } from './components/tab/tab.component';
import { TabContainerComponent } from './containers/tab-container/tab-container.component';

/**
 * @description
 * Provides a simple tab functionality to the application.
 */
@NgModule({
  declarations: [
    TabComponent,
    TabContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabComponent,
    TabContainerComponent
  ]
})
export class TabModule {}
