import { Component, ViewChild, Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public name = 'Advika';
  public username = 'Awoke101';
  
  public editEnabled = true;
  public picurl: string;

  constructor() {}

  public clear() {
    this.picurl = '';
  }

  // tableData[1][name] = "Advika"
}
