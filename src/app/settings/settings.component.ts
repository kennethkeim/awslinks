import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../shared/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  public readonly form = new FormGroup({
    resources: new FormControl<string>('', [Validators.required]),
    envs: new FormControl<string>(''),
  });

  public readonly textareaClasses = [
    'bg-slate-50',
    'border',
    'border-slate-300',
    'text-sm',
    'rounded-md',
    'focus:ring-blue-500',
    'focus:border-blue-500',
    'block',
    'w-full',
    'p-2.5',
    'dark:bg-slate-700',
    'dark:border-slate-600',
    'dark:placeholder-slate-400',
    'dark:focus:ring-blue-500',
    'dark:focus:border-blue-500',
  ];

  constructor(private readonly settingsService: SettingsService) {}

  public onSubmit(): void {
    this.settingsService.saveSettings(this.form.value);
  }
}
