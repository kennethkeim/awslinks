import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResourceCardComponent } from './resource-card/resource-card.component';
import { SearchComponent } from './search/search.component';
import { ResultsboxComponent } from './resultsbox/resultsbox.component';
import { LinkArrowIconComponent } from './icons/link-arrow-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourceCardComponent,
    SearchComponent,
    ResultsboxComponent,
    LinkArrowIconComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
