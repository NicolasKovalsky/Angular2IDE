import { Component, OnInit,  ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { AddWidgetModalComponent, AddWidgetModalContext } from '../add-widget-modal.component';


@Component({
  selector: 'app-add-widget-button',
  template: `
    <button (click)="onAddWidget()" id="add-widget" class="md-fab md-primary md-button" type="button" aria-label="Eat cake">
            <em class="fa fa-plus fa-lg ng-scope"></em>
      <div class="md-ripple-container"></div></button>
  `,
  styles: [`
    #add-widget{
      position:absolute;
      bottom: 30px;
      right:30px;
    }

    
  `]
})
export class AddWidgetButtonComponent implements OnInit {

  constructor(overlay: Overlay, vcRef: ViewContainerRef, private modal : Modal) {
     overlay.defaultViewContainer = vcRef;
   }

  ngOnInit() {
  }

  onAddWidget(){
    this.modal.open(AddWidgetModalComponent,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  /*  this.modal.alert()
      .dialogClass('modal-dialog modal-75')
      .isBlocking(true)
      .showClose(true)
      .title('A simple Alert style modal window')
      .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <div class="row">
            <app-widgets-menu></app-widgets-menu>
            </div>`)
      .open();*/
  }

}
