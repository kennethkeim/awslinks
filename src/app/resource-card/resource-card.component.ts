import { Component, Input } from '@angular/core';
import { Resource } from '../resources/resources';

@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.scss'],
})
export class ResourceCardComponent {
  @Input() public resource?: Resource;
}
