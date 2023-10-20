import { Component } from '@angular/core';
import { getResources, mockConfig, mockResources } from './resources/resources';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public resources = getResources(mockResources, mockConfig);
}
