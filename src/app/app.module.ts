import { CanvasModule } from './canvas/canvas.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { AddWidgetButtonComponent } from './add-widget-button/add-widget-button.component';
import { WidgetsMenuComponent } from './widgets-menu.component';
import { AddWidgetModalComponent } from './add-widget-modal.component';
import { MenusService } from './menus.service';
import { WidgetMenuItemComponent } from './widget-menu-item.component';
import { NgGridModule } from 'angular2-grid';
import { DragulaModule } from 'ng2-dragula';
import { DndModule } from 'ng2-dnd';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddWidgetButtonComponent,
    WidgetsMenuComponent,
    AddWidgetModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    NgGridModule,
    CanvasModule,
    DragulaModule,
    SidebarModule,
    ComponentsModule,
    DndModule.forRoot()
  ],
  providers: [MenusService],
  bootstrap: [AppComponent],
  entryComponents: [AddWidgetModalComponent, HeaderComponent]
})
export class AppModule { }
