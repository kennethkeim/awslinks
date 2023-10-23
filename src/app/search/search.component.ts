import { Component, EventEmitter, Output } from '@angular/core';
import { KeyEvent } from '../models/search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @Output() onKeyup = new EventEmitter<KeyEvent>();

  public handleKeyup(event: KeyboardEvent): void {
    this.onKeyup.emit({
      code: event.code,
      inputValue: (event.target as HTMLInputElement).value.trim(),
    });
  }
}
