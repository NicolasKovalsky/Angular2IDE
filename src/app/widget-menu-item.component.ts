import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-menu-item',
  templateUrl: './widget-menu-item.component.html',
  styles: []
})
export class WidgetMenuItemComponent implements OnInit {
  @Input() item;
  @Input() pIndex;
  constructor() { }

  ngOnInit() {
  }

}
