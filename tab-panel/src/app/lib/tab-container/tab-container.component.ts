import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss']
})
export class TabContainerComponent {

  @Input()
  title!: string;

  @Input()
  selected = false;
}
