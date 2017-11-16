import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from "./summary/summary.component";
import { FacultyComponent } from "./faculty/faculty.component";

const appRoutes: Routes = [
        {path:'summary',component:SummaryComponent},
        {path:'faculty',component:FacultyComponent},
        {path:'',redirectTo:'/summary',pathMatch: 'full'}
];
export const AppRoute = RouterModule.forRoot( appRoutes, {useHash: true} );