import { ComponentsFactoryService } from '../components-factory.service';
import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  template: `
      <div #container> </div>    
  `,
  styles: []
})
export class DynamicComponentComponent implements OnInit {

   @ViewChild('container', { read: ViewContainerRef }) container;
   @Input() componentData;
   @Input() componentType;
   
  constructor(private resolver: ComponentFactoryResolver, private componentsFactory: ComponentsFactoryService) { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    const componentClass = this.componentsFactory.getComponentClass(this.componentType);
    const widgetFactory = this.resolver.resolveComponentFactory(componentClass);
    const widgetRef = this.container.createComponent(widgetFactory);
    if(this.componentData){
      for (let key of Object.keys(this.componentData)) {
      widgetRef.instance[key] = this.componentData[key];
    }
    }
    
    
  }

}
