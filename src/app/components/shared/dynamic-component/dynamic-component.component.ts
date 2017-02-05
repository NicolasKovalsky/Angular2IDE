import { ComponentsFactoryService } from '../components-factory.service';
import { DynamicComponent } from '../dynamic-component.class';
import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver, ComponentFactory, ComponentRef, Input, Compiler } from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  template: `
      <div #container> </div>    
  `,
  styles: []
})
export class DynamicComponentComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef }) container;
  @Input() componentData: DynamicComponent;

  private cmpRef: ComponentRef<any>;

  constructor(private compiler: Compiler, private componentsFactory: ComponentsFactoryService) { }

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.compileToComponent(this.componentData)).then((factory: ComponentFactory<any>) => {
      this.cmpRef = this.container.createComponent(factory)
    });
  }

  //Generates component factory from component metadata & code.
  compileToComponent(c_data: DynamicComponent): Promise<ComponentFactory<any>> {

    const metadata = new Component({
      template: DynamicComponent.template,
      styles: DynamicComponent.styles
    });
    let decoratedCmp = Component(metadata)(class myDynamicComponent { });
    return this.compiler.compileComponentAsync(decoratedCmp);
  }



}
