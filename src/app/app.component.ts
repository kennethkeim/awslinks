import { Component } from '@angular/core';
import { getResources, mockConfig, mockResources } from './resources/resources';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public readonly resources = getResources(mockResources, mockConfig);
  public searchInput = '';
}
