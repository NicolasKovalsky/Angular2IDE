import { FormsModule } from '@angular/forms';
import { DynamicAppService } from './shared/dynamic-app.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsModule } from './widgets/widgets.module';
import { DndModule } from 'ng2-dnd';
import { NgGridModule } from 'angular2-grid';

import { ComponentsComponent } from './components.component';
import { ComponentsFactoryService } from './shared/components-factory.service';
import { DynamicRegionComponent } from './shared/dynamic-region/dynamic-region.component';
import { DynamicComponentComponent } from './shared/dynamic-component/dynamic-component.component';
import { DynamicAppComponent } from './shared/dynamic-app/dynamic-app.component';

@NgModule({
  imports: [
    CommonModule,
    DndModule.forRoot(),
    NgGridModule,
    WidgetsModule,
    FormsModule
  ],
  exports: [DynamicRegionComponent, DynamicComponentComponent, DynamicAppComponent],
  providers: [ComponentsFactoryService, DynamicAppService],
  declarations: [ComponentsComponent, DynamicRegionComponent, DynamicComponentComponent, DynamicAppComponent]
})
export class ComponentsModule { }
