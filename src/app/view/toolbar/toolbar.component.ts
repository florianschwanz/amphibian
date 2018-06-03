import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {SnackbarService} from '../../services/snackbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: [require('./toolbar.component.scss')]
})
export class ToolbarComponent implements OnInit {
  @Input() title;

  constructor(private snackbarService: SnackbarService,
              iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-menu-24px.svg'));
    iconRegistry.addSvgIcon('more_white', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-more_vert-24px.svg'));
    iconRegistry.addSvgIcon('blank', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/blank_24px.svg'));
  }

  ngOnInit() {
  }

  /**
   * Handles click on menu items
   * @param menuItem
   */
  onMenuItemClicked(menuItem: string) {
    switch (menuItem) {
      default: {
        this.snackbarService.showSnackbar(`Clicked on ${menuItem}`, null);
      }
    }
  }
}
