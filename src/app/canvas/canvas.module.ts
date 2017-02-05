import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasComponent } from './canvas.component';
import {ComponentsModule} from '../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [CanvasComponent],
  declarations: [CanvasComponent]
})
export class CanvasModule { }
