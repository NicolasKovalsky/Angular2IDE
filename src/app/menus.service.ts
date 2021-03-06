import { Injectable } from '@angular/core';

@Injectable()
export class MenusService {

  constructor() { }

  getMenu(menuId: string) {
    return [
      {
        "text": "Main Navigation",
        "heading": "true",
        "translate": "sidebar.heading.HEADER"
      },
      {
        "text": "Welcome",
        "sref": "app.welcome",
        "icon": "icon-tag"
      },
      {
        "text": "Material",
        "sref": "#",
        "icon": "fa fa-shield",
        "submenu": [
          { "text": "Widgets", "sref": "app.matwidgets" },
          { "text": "Cards", "sref": "app.cards" },
          { "text": "Forms", "sref": "app.forms" },
          { "text": "Inputs", "sref": "app.inputs" },
          { "text": "Lists", "sref": "app.lists" },
          { "text": "Whiteframe", "sref": "app.whiteframe" },
          { "text": "Colors", "sref": "app.matcolors" },
          { "text": "ngMaterial", "sref": "app.ngmaterial" }
        ],
        "alert": "new",
        "label": "label label-primary"
      }
    ];
  }

}
