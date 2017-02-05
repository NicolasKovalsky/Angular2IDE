import { Component, OnInit, HostListener, Renderer } from '@angular/core';

//TODO: Escalar body de adentro.

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  width = 400;
  height = 400;
  scale = 0.8;
  //@ContentChildren(Pane) panes: QueryList<Pane>;

  constructor(private renderer: Renderer) { }

  ngOnInit() {
  }

  @HostListener('window:wheel', ['$event'])


  wheel(e) {
    debugger;
    if (e.deltaY < 0) {
      this.scale = this.scale + 0.05;
    } else {
      this.scale = this.scale - 0.05;
    }

  }

}
