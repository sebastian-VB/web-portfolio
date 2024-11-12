import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSectionComponent } from './sections/home-section/home-section.component';
import { ButtonCVComponent } from './sections/components/button-cv/button-cv.component';
import { AboutmeComponent } from './sections/aboutme/aboutme.component';
import { CurriculumSectionComponent } from './sections/curriculum-section/curriculum-section.component';
import { ProjectsSectionComponent } from './sections/projects-section/projects-section.component';
import { FooterSectionComponent } from './sections/footer-section/footer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeSectionComponent,
    ButtonCVComponent,
    AboutmeComponent,
    CurriculumSectionComponent,
    ProjectsSectionComponent,
    FooterSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
