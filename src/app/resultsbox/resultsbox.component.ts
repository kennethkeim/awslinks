import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Resource } from '../resources/resources';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-resultsbox',
  templateUrl: './resultsbox.component.html',
  styleUrls: ['./resultsbox.component.scss'],
})
export class ResultsboxComponent implements OnChanges {
  @Input() searchInput?: string;
  @Input() resources: Resource[] = [];

  private readonly search = new BehaviorSubject('');
  public readonly results$ = this.search.asObservable().pipe(
    map((search) => {
      return this.resources.filter((resource) =>
        resource.name.toLowerCase().includes(search.toLowerCase())
      );
    })
  );

  ngOnChanges(changes: SimpleChanges): void {
    const searchInputChange = changes['searchInput'];
    if (searchInputChange) this.search.next(searchInputChange.currentValue);
  }
}
