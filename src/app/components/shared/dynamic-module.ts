import { DynamicComponent, DynamicComponentFactory } from './dynamic-component.class';
import { NgModule, Type } from '@angular/core';


export class DynamicModule {
    public components: any = {} 


    constructor(public name:string = 'AppModule', public imports: any[] = [] , public providers:any[] = [] , public schemas: any[] = [], public declarations: any[] = [], public bootstrap:any[]= []){
    }

    addComponent(myComponent: DynamicComponent){
        let componentType: Type<any>;
        componentType = DynamicComponentFactory.createComponent(myComponent)
        this.declarations.push(componentType);
        this.components[myComponent.name] = { dynamicComponent: myComponent, type: componentType};
    }
    addBootstrapComponent(myComponent: DynamicComponent){
        if(this.components[myComponent.name] != undefined){
            this.bootstrap.push(this.components[myComponent.name].type);
        }
    }

    public getModuleTree(){
        return {
            id: 2,
            name: this.name,
            children: Object.keys(this.components).map((component)=> { return { id: 3, name: component }})
        }
    }

}


export class DynamicModuleFactory {

    public static createModule(myModule: DynamicModule) {
        const moduleMeta: NgModule = {
            imports: myModule.imports,
            providers: myModule.providers,
            schemas: myModule.schemas,
            declarations: myModule.declarations
        };
        return NgModule(moduleMeta)(class _ { })
    }

}
