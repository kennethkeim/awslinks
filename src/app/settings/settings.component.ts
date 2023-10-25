import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  public readonly form = new FormGroup({
    resources: new FormControl(null, [Validators.required]),
    envs: new FormControl(null),
  });
}
