import { Component, OnDestroy, Type } from '@angular/core';

export class DynamicComponent {
    constructor(public name: string, public selector: string,
        public template: string,
        public styles?: string[],
        public directives?: string[],
        public functions?: any[],
        public componentClass?: Type<any>) { }
}

export class DynamicComponentFactory {

    public static createComponent(myComponent: DynamicComponent) {
        const metadata = new Component({
            selector: myComponent.selector,
            template: myComponent.template,
        });

        return Component(metadata)(myComponent.componentClass);
    }

}