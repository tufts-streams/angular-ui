import {
  Component,
  ContentChildren,
  OnInit,
  QueryList,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
//import { ConfigurableComponent } from '../shared/configurable-component.base';
//import { ConfigurationStore } from '../shared/configuration.store';
//import { Log } from 'npmlog';
//import { ConfigurationNavMenu } from '../models/configuration/configuration.navmenu.model';
//import { Router } from '@angular/router';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  selectedRow: Number;
  setClickRow: Function;
  // open: boolean;
  // active: boolean;
  categories: [
    {
      category: string;
    }
  ];

  constructor() {
    this.categories = [
      {
        category: 'Summary',
      },
      {
        category: 'Topics',
      },
      {
        category: 'Research',
      },
      {
        category: 'News',
      },
      {
        category: 'Events',
      },
      {
        category: 'Schools & Departments',
      },
      {
        category: 'Courses',
      },
      {
        category: 'Faculty',
      },
    ];
    this.setClickRow = function(index) {
      this.selectedRow = index;
    };
  }
}
