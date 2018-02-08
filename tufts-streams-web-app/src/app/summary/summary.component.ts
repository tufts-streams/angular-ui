import { Component, OnInit } from '@angular/core';
import { FacultyService } from "../faculty/faculty.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  public sFacultyList: any;
  public summaryItems = [{ title: 'RESEARCH', subtitle: '32 publications 8 research projects 3 grants 6 presentations' }, 
                         { title: 'COURSES', subtitle: '6 courses in Spring 2017'}, 
                         { title: 'FACULTY', subtitle: ''}, 
                         { title: 'NEWS', subtitle: '32 tweets 8 blog posts 33 articles' }, 
                         { title: 'ORGANIZATIONS', subtitle: '4 student organizations 3 university organizations' }];
  constructor(private facultyService: FacultyService) { };
  ngOnInit() {
    this.facultyService.getFaculties().subscribe((data) => {
      this.sFacultyList = data.response.docs;
      console.log(this.sFacultyList);
    });
  }
}
