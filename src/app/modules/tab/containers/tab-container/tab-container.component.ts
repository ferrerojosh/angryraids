import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../../components/tab/tab.component';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.styl']
})
export class TabContainerComponent implements AfterContentInit {

  @ContentChildren(TabComponent)
  tabsQuery: QueryList<TabComponent>;

  get tabs() {
    return this.tabsQuery.toArray();
  }

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter(tab => tab.active);
    // If there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabsQuery.first);
    }
  }

  selectTab(selectedTab: TabComponent) {
    // Deactivate all tabs and activate selected tab
    this.tabs.forEach(tab => tab.active = false);
    selectedTab.active = true;
  }

}
