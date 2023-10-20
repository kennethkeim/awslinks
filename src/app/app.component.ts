import { Component } from '@angular/core';
import { mockResources } from './resources/resources';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public resources = mockResources;
}
