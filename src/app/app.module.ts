import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sections/components/navbar/navbar.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { ButtonCVComponent } from './sections/components/button-cv/button-cv.component';
import { AboutmeComponent } from './sections/aboutme/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSectionComponent,
    ButtonCVComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
