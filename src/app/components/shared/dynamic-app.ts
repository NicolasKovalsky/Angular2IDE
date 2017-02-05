import { DynamicComponent } from './dynamic-component.class';
import { DynamicModule } from './dynamic-module';


export class DynamicApp {
    private appModules: DynamicModule[] = [];
    constructor(){
        let myModule = new DynamicModule()
        let myComponent = new DynamicComponent('testComponent','my-test-component','<h1>IT WORKSSSSS</h1><a (click)="click()">hace click</a>',[],[], [], class _ { click(){ console.log("gloria")}  });
        myModule.addComponent(myComponent);
        myModule.addBootstrapComponent(myComponent);
        this.appModules.push(myModule);
        this.getAppModulesTree();
    }

    public getAppModules(){
        return this.appModules;
    }

    public getAppModulesTree(){
        return [{
            id:1,
            name: 'MyApp',
            children: this.appModules.map((appModule) => appModule.getModuleTree())
        }]
    }


    
   
}
