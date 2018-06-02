import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: [require('./toolbar.component.scss')]
})
export class ToolbarComponent implements OnInit {
  @Input() title;
  @Output() onMenuItemClickedEmitter = new EventEmitter<string>();

  constructor(iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-menu-24px.svg'));
    iconRegistry.addSvgIcon('more_white', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-more_vert-24px.svg'));
  }

  ngOnInit() {
  }

  onClickMenuItem(menuItem: string): void {
    this.onMenuItemClickedEmitter.emit(menuItem);
  }

  onClickInput() {
  }

  onChangeSearchItem(searchItem: string): void {
  }
}
