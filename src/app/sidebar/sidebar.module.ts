import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { PagesPanelComponent } from './pages-panel/pages-panel.component';
import { ComponentsPanelComponent } from './components-panel/components-panel.component';
import { DndModule } from 'ng2-dnd';
import { ComponentsModule } from '../components/components.module';
import { TreeModule } from 'angular2-tree-component';

@NgModule({
  imports: [
    CommonModule,
    DndModule.forRoot(),
    ComponentsModule,
    TreeModule
  ],
  exports: [SidebarComponent],
  declarations: [SidebarComponent, PagesPanelComponent, ComponentsPanelComponent]
})
export class SidebarModule { }
