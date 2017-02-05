import { ComponentsFactoryService } from './../components-factory.service';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DynamicComponent } from '../dynamic-component.class';

import { DragulaService } from 'ng2-dragula';


@Component({
  selector: 'app-dynamic-region',
  template: `
<input type="checkbox" [(ngModel)]='state.editable'>
{{editable}}
   <div class="region" dnd-droppable (onDropSuccess)="drop($event)">
    <div [ngGrid]="{'resizeable': false, 'margins': [5, 10]}">
      <div #container></div>
    </div>
    <app-dynamic-component 
        *ngFor="let component of componentsArray;" 
  
        [componentData]="component"
       
      >
      </app-dynamic-component>
   </div>

   
  `,
  styles: [`
      div.region{
        height:100%;
        width:100%;
      }
  `]
})

export class DynamicRegionComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef }) container;
  componentsArray = [];
  state = { editable: false };

  constructor(private resolver: ComponentFactoryResolver, private componentFactoryService: ComponentsFactoryService) {
  }

  ngOnInit() {
  }

  drop(e) {
    const componentClass = this.componentFactoryService.getComponentClassName('app-button');
    const componentFactory = this.resolver.resolveComponentFactory(componentClass);
    const newComponent = this.container.createComponent(componentFactory);
    newComponent.instance.componentData = this.componentFactoryService.newComponentDataInstance('app-button');
    newComponent.instance.state = this.state;
    debugger;
    this.componentsArray.push(newComponent);
  }



  ngAfterContentInit() {
  }

}
