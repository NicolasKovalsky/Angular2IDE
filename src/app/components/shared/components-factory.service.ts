import { WidgetKpiProgresIconComponent } from '../widgets/widget-kpi-progres-icon.component';
import { ButtonComponent } from '../widgets/button.component';
import { Injectable } from '@angular/core';

@Injectable()
export class ComponentsFactoryService {
  componentsMap = {
    'angle-widget-kpi-progress-icon': { name: 'progressWidget', className: WidgetKpiProgresIconComponent },
    'app-button': { name: 'Button', className: ButtonComponent, defaultData: { innerHtml: 'Click me!' } }
  }

  constructor() { }

  getComponentClassName(componentKey: string) {
    if (this.componentsMap[componentKey] !== undefined)
      return this.componentsMap[componentKey].className
    else
      throw new Error('Component ' + componentKey + ' class not found.');
  }

  getAvailableComponents() {
    return [{ c_type: 'app-button' }];
  }

  newComponentDataInstance(componentKey: string) {
    if (this.componentsMap[componentKey] !== undefined) {
      return this.componentsMap[componentKey].defaultData;
    }

    else
      throw new Error('Component ' + componentKey + ' class not found.');
  }








}
