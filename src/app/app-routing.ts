
import {RouterModule, Routes} from "@angular/router";
import {AllfunctionalitiesComponent} from "./allfunctionalities/allfunctionalities.component";
import {EmployeedetailsComponent} from "./employeedetails/employeedetails.component";
import {ProjectDetialsComponent} from "./portfolio/project-detials.component";

const APP_ROUTES: Routes = [
  {path: "", component: AllfunctionalitiesComponent},
  {path: "emp-details", component: EmployeedetailsComponent},
  {path: "project-details", component: ProjectDetialsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
