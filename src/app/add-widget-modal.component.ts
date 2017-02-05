import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class AddWidgetModalContext extends BSModalContext {
  constructor() {
    super();
  }
}



@Component({
  selector: 'app-add-widget-modal',
  templateUrl: './add-widget-modal.component.html',
  styles: [`
    .col-md-3.widget-menu{
      padding-left:0px;
    }
    .modal-header{
      background:#2196f3;
      color:white;
    }

  `]
})
export class AddWidgetModalComponent implements ModalComponent<AddWidgetModalContext> {
  context: AddWidgetModalContext;

  constructor(public dialog: DialogRef<AddWidgetModalContext>) {
    this.context = dialog.context;
  }

  onClose() {
    this.dialog.close();
  }

}
