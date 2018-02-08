import { Component } from '@angular/core';
import { NavItems } from "../../app.interface";

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  public categories: NavItems[];
  constructor() {
    this.categories = [
      {
        category: 'Summary',
        routerLink: 'summary'
      },
      {
        category: 'Topics',
        routerLink: 'topics'
      },
      {
        category: 'Research',
        routerLink: 'research'
      },
      {
        category: 'News',
        routerLink: 'news'
      },
      {
        category: 'Events',
        routerLink: 'events'
      },
      {
        category: 'Schools & Departments',
        routerLink: 'schools-departments'
      },
      {
        category: 'Courses',
        routerLink: 'courses'
      },
      {
        category: 'Faculty',
        routerLink: 'faculty'
      },
    ];
  }
}
