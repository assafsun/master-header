import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public title = 'master-header';
  public tabs: string[] = [];
  public menuItems: string[] = [];

  public ngOnInit() {
    this.tabs.push ('Action1');
    this.tabs.push ('Action2');
    this.tabs.push ('Action3');
    this.tabs.push ('Action4');

    this.menuItems.push ('Menu Action 1');
    this.menuItems.push ('Menu Action 2');
    this.menuItems.push ('Menu Action 3');
  }

  public onTabSelected(tab: string) {
    console.log('Selected tab is ' + tab);
  }

  public onMenuClicked(menuItem: string) {
    console.log('Clicked menu: ' + menuItem);
  }
}
