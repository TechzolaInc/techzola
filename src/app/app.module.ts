import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterialModule } from "@angular/material";
import {CarouselModule} from "primeng/primeng";
import {ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ProjectCardComponent } from "./portfolio/project-card.component";
import { OurGroupComponent } from "./our-group/our-group.component";
import { OurGroupDetailsComponent } from "./our-group/our-group-details.component";
import { LanguageCarouselComponent } from "./aboutus/language-carousel.component";
import { ContactFormComponent } from "./footer/contact-form.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AllfunctionalitiesComponent } from "./allfunctionalities/allfunctionalities.component";
import { EmployeedetailsComponent } from "./employeedetails/employeedetails.component";
import {routing} from "./app-routing";
import { ByPassHtmlPipe } from "./by-pass-html.pipe";
import { ProjectDetialsComponent } from "./portfolio/project-detials.component";
import { HttpModule } from "@angular/http";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    PortfolioComponent,
    ProjectCardComponent,
    OurGroupComponent,
    OurGroupDetailsComponent,
    LanguageCarouselComponent,
    ContactFormComponent,
    AllfunctionalitiesComponent,
    EmployeedetailsComponent,
    ByPassHtmlPipe,
    ProjectDetialsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    CarouselModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
