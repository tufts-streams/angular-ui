import { Component, OnInit } from '@angular/core';
import { FacultyService } from "./faculty.service";

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit{
  public facultyList: any;
  constructor(private facultyService: FacultyService){};
  ngOnInit() {
    this.facultyService.getFaculties().subscribe((data)=>{
      this.facultyList = data.response.docs;
      console.log(this.facultyList);
    });
  }
}
