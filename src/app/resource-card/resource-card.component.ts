import { Component, Input } from '@angular/core';
import { Resource } from '../resources/resources';

@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
})
export class ResourceCardComponent {
  @Input() public resource?: Resource;
}
