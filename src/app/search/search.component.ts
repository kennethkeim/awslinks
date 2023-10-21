import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @Output() inputChange = new EventEmitter<string>();

  public onSearchInput(event: KeyboardEvent): void {
    this.inputChange.emit((event.target as HTMLInputElement).value);
  }
}
