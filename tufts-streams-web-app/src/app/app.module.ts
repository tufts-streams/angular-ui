import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";

import { AppRoute } from "./app.routing";

import { AppComponent } from './app.component';
import { SummaryComponent } from "./summary/summary.component";
import { FacultyComponent } from "./faculty/faculty.component";

import { FacultyService } from "./faculty/faculty.service";
import { HeaderComponent } from './common/header/header.component';
import { CardComponent } from "./common/components/card/card.component";
import { NavComponent } from "./common/nav/nav.component";



@NgModule({
  declarations: [
    AppComponent, 
    NavComponent,
    SummaryComponent,
    FacultyComponent,
    CardComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule, 
    BrowserModule,
    HttpModule,
    AppRoute
  ],
  providers: [FacultyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
