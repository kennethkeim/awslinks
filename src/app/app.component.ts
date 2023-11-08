import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { KeyEvent } from './models/search.model';
import { SettingsService } from './shared/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public readonly resources$ = this.settingsService.resources$;
  public readonly keyup = new Subject<KeyEvent>();
  public readonly keyup$ = this.keyup.asObservable();
  public settingsPane = false;

  constructor(private readonly settingsService: SettingsService) {}
}
