import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public title = 'master-header';
  public tabs: string[] = [];

  public ngOnInit() {
    this.tabs.push ("Assaf");
    this.tabs.push ("Moran");
    this.tabs.push ("Alon");
    this.tabs.push ("Neta");
  }

  public onTabSelected(tab: string) {
    console.log("Selected tab is " + tab);
  }
}
