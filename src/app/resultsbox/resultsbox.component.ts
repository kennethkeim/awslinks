import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Resource } from '../resources/resources';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { CmdKey, KeyEvent } from '../models/search.model';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-resultsbox',
  templateUrl: './resultsbox.component.html',
})
export class ResultsboxComponent implements OnInit {
  @Input() resources: Resource[] = [];
  @Input() keyup$?: Observable<KeyEvent>;

  private _activeIndex = 0;

  private readonly search = new BehaviorSubject('');
  public readonly search$ = this.search.asObservable();
  public readonly results$ = this.search.asObservable().pipe(
    map((search) => {
      return this.resources.filter((resource) => {
        if (!search) return false;
        return resource.name.toLowerCase().includes(search.toLowerCase());
      });
    })
  );

  constructor(private elem: ElementRef) {}

  ngOnInit(): void {
    this.keyup$?.subscribe((event) => {
      if (event.code === CmdKey.ArrowUp) {
        this.onArrowUp();
      } else if (event.code === CmdKey.ArrowDown) {
        this.onArrowDown();
      } else if (event.code === CmdKey.Enter) {
        const nativeElem: HTMLElement = this.elem.nativeElement;
        const link = nativeElem.querySelector(`.link-${this.activeIndex}`);
        (link as HTMLAnchorElement).click();
      } else {
        this.search.next(event.inputValue);
      }
    });
  }

  public get activeIndex() {
    return this._activeIndex;
  }

  private onArrowUp(): void {
    if (this._activeIndex > 0) this._activeIndex--;
  }

  private onArrowDown(): void {
    if (this._activeIndex < this.resources.length - 1) this._activeIndex++;
  }
}
