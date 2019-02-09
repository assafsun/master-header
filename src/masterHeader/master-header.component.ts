import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'master-header',
  templateUrl: './master-header.component.html',
  styleUrls: ['./master-header.component.less']
})
export class MasterHeaderComponent implements OnInit {

  @Input()
  public tabs: string[] = [];

  @Output()
  tabSelected: EventEmitter<string> = new EventEmitter();

  constructor() { }

  public ngOnInit() {
  }

  public selectTab(tabName: string) {
    this.tabSelected.emit(tabName);
  }
}
