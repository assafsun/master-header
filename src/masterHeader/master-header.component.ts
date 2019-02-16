import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'master-header',
  templateUrl: './master-header.component.html',
  styleUrls: ['./master-header.component.less']
})
export class MasterHeaderComponent implements OnInit {

  @Input()
  public name: string = 'My Header';

  @Input()
  public iconLInk: string = 'https://image.flaticon.com/icons/svg/149/149053.svg';

  @Input()
  public tabs: string[] = [];

  @Input()
  public menuItems: string[] = [];

  @Output()
  tabSelected: EventEmitter<string> = new EventEmitter();

  @Output()
  menuClicked: EventEmitter<string> = new EventEmitter();

  constructor() { }

  public ngOnInit() {
  }

  public selectTab(tabName: string) {
    this.tabSelected.emit(tabName);
  }

  public selectMenuItem(menuItemName: string) {
    this.menuClicked.emit(menuItemName);
  }
}
