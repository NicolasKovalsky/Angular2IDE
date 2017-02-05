import { DynamicAppService } from './../dynamic-app.service';
import { DynamicModuleFactory } from './../dynamic-module';
import { DynamicApp } from './../dynamic-app';
import { Component, OnChanges, OnInit } from '@angular/core';
import {
  ComponentFactoryResolver,
  ComponentRef,
  Compiler,
  Directive,
  Inject,
  Input,
  NgModule,
  SimpleChanges,
  Type,
  ViewContainerRef,
  ReflectiveInjector,
  ViewChild,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-dynamic-app',
  templateUrl: './dynamic-app.component.html',
  styles: []
})
export class DynamicAppComponent implements OnInit {
  private myApp: DynamicApp;
  @ViewChild('dynamicAppContainer', { read: ViewContainerRef }) appContainer;

  constructor(private vcRef: ViewContainerRef, private compiler: Compiler, private dynamicAppService: DynamicAppService) { 
    this.myApp = dynamicAppService.getDynamicApp();
  }

  ngOnInit() {

    this.test()
  }

  test() {
    debugger;
    //const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);

    let currentModule = this.myApp.getAppModules()[0]
    this.compiler.compileModuleAndAllComponentsAsync<any>(DynamicModuleFactory.createModule(currentModule))
      .then(factory => {
        let cmpFactory: any;
        if (currentModule.bootstrap.length > 0) {
          let cmpType: Type<any> = currentModule.bootstrap[0];
          for (let i = factory.componentFactories.length - 1; i >= 0; i--) {
            if (factory.componentFactories[i].componentType === cmpType) {
              cmpFactory = factory.componentFactories[i];
              break;
            }
          }
        }

        return cmpFactory;
      })
      .then(cmpFactory => {
        if (cmpFactory) {
          this.appContainer.clear();
          let component = this.appContainer.createComponent(cmpFactory, 0 /*, injector*/);
          //this.component.changeDetectorRef.detectChanges();
        }
      });
  }

}
