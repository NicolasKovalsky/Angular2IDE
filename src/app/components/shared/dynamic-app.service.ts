import { DynamicApp } from './dynamic-app';
import { Injectable } from '@angular/core';

@Injectable()
export class DynamicAppService {
  private dynamicApp: DynamicApp = new DynamicApp();
  constructor() { }

  getDynamicApp(){
    return this.dynamicApp;
  }

}
