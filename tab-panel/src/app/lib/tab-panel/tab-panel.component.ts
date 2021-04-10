import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { TabContainerComponent } from '../tab-container/tab-container.component';

@Component({
  selector: 'tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss']
})
export class TabPanelComponent implements AfterContentInit {

  @ContentChildren(TabContainerComponent)
  tabs!: QueryList<TabContainerComponent>;

  @Input()
  headerTemplate!: TemplateRef<any>;

  ngAfterContentInit(): void {
    const selectedTabs = this.tabs?.find(tab => tab.selected)
    
    if(!selectedTabs && this.tabs.first) {
      this.tabs.first.selected = true;
    }
  }

  selectTab(tab: TabContainerComponent) {
    this.tabs.forEach(tab => tab.selected = false);
    tab.selected = true;
  }

  get tabsContext() {
    return {
      tabs: this.tabs
    }
  }


}
