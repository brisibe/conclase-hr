import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sidebar-items',
  templateUrl: './sidebar-items.component.html',
  styleUrls: ['./sidebar-items.component.scss']
})
export class SidebarItemsComponent implements OnInit {

  @Input('width') windowWidth: any;
  @Output('onNavigate') sidenavClick = new EventEmitter();

  isOpen: boolean;

  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode: any = 'flat';
  constructor() { }

  ngOnInit() {
    this.isOpen = false;
  }


  emitNavigate() {
    this.sidenavClick.emit(true);
  }

}
