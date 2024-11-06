import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sections/components/navbar/navbar.component';
import { HomeSectionComponent } from './sections/home-section/home-section.component';
import { ButtonCVComponent } from './sections/components/button-cv/button-cv.component';
import { AboutmeComponent } from './sections/aboutme/aboutme.component';
import { CurriculumSectionComponent } from './sections/curriculum-section/curriculum-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeSectionComponent,
    ButtonCVComponent,
    AboutmeComponent,
    CurriculumSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
