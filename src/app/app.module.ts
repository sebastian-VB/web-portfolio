import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sections/components/navbar/navbar.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
