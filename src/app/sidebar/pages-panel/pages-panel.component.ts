import { Component, OnInit } from '@angular/core';
import { DynamicAppService } from '../../components/shared/dynamic-app.service';

@Component({
  selector: 'app-pages-panel',
  templateUrl: './pages-panel.component.html',
  styleUrls: ['./pages-panel.component.css']
})
export class PagesPanelComponent implements OnInit {
  tree: any;
  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
  
  constructor(private dynamicAppService: DynamicAppService) {
    this.tree = this.dynamicAppService.getDynamicApp().getAppModulesTree();
    
    debugger;
   }

  ngOnInit() {
  }

}
