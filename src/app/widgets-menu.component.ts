import { MenusService } from './menus.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


//TODO: Separar lo que es menuItem de menu.
@Component({
  selector: 'app-widgets-menu',
  templateUrl: './widgets-menu.component.html',
  styles: [`
    .sidebar{
      overflow-y: auto;
    }
  `]
})
export class WidgetsMenuComponent implements OnInit {

  collapseList: Array<any>;
  lastEventFromChild: any;
  menuItems:any;

  constructor(private menusService: MenusService) { }

  ngOnInit() {
    this.menuItems = this.menusService.getMenu('main-menu');
    
  }

  getMenuItemPropClasses(item) {
      return (item.heading ? 'nav-heading' : '') +
              (this.isActive(item) ? ' active' : '') ;
  };

  toggleCollapse($index, isParentItem) {

    // make sure the item index exists
    if (this.collapseList[$index] !== undefined) {
      if (!this.lastEventFromChild) {
        this.collapseList[$index] = !this.collapseList[$index];
        this.closeAllBut($index);
      }
    }
    else if (isParentItem) {
      this.closeAllBut(-1);
    }

    this.lastEventFromChild = this.isChild($index);

    return true;

  };

  addCollapse($index, item) {
    this.collapseList[$index] = !this.isActive(item);
  };

  isActive(item:any){
    return false;
  }

  isCollapse($index) {
    return (this.collapseList[$index]);
  };



  closeAllBut(index) {
    index += '';
    for (var i in this.collapseList) {
      if (index < 0 || index.indexOf(i) < 0)
        this.collapseList[i] = true;
    }
  }

  isChild($index) {
    /*jshint -W018*/
    return (typeof $index === 'string') && !($index.indexOf('-') < 0);
  }

}
