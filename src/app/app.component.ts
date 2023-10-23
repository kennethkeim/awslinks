import { Component } from '@angular/core';
import { getResources, mockConfig, mockResources } from './resources/resources';
import { Subject } from 'rxjs';
import { KeyEvent } from './models/search.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public readonly resources = getResources(mockResources, mockConfig);
  public readonly keyup = new Subject<KeyEvent>();
  public readonly keyup$ = this.keyup.asObservable();
}
