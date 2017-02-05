import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-widget-kpi-progres-icon',
  templateUrl: './widget-kpi-progres-icon.component.html',
  styles: [`
    .panel.widget{
      height:100%;
    }
  `]
})
export class WidgetKpiProgresIconComponent implements OnInit {
  @Input() percentage: number;
  @Input() kpi: string;
  @Input() icon;
  @Input() subtitle;
  
  constructor() { }

  ngOnInit() {
  }

}
