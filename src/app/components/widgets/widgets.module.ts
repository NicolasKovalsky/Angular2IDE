import { WidgetKpiProgresIconComponent } from './widget-kpi-progres-icon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsComponent } from './widgets.component';
import { ButtonComponent } from './button.component';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { NgGridModule } from 'angular2-grid';


@NgModule({
  imports: [
    CommonModule,
    MdButtonModule.forRoot(), 
    MdCardModule.forRoot(),
    NgGridModule 

  ],
  exports: [WidgetKpiProgresIconComponent, ButtonComponent],
  entryComponents: [WidgetKpiProgresIconComponent, ButtonComponent],
  declarations: [WidgetsComponent, WidgetKpiProgresIconComponent, ButtonComponent]
})
export class WidgetsModule { }
