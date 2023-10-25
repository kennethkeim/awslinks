import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResourceCardComponent } from './resource-card/resource-card.component';
import { SearchComponent } from './search/search.component';
import { ResultsboxComponent } from './resultsbox/resultsbox.component';
import { LinkArrowIconComponent } from './icons/link-arrow-icon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SunIconComponent } from './icons/sun-icon.component';
import { IconComponent } from './icons/icon.component';
import { SettingsIconComponent } from './icons/settings-icon.component';
import { SettingsComponent } from './settings/settings.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ResourceCardComponent,
    SearchComponent,
    ResultsboxComponent,
    LinkArrowIconComponent,
    NavbarComponent,
    SunIconComponent,
    IconComponent,
    SettingsIconComponent,
    SettingsComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
