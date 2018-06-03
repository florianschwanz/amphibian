import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatDialog, MatDialogConfig, MatIconRegistry} from '@angular/material';
import {SnackbarService} from '../../services/snackbar.service';
import {AboutDialogComponent} from '../dialogs/app-info/about-dialog/about-dialog.component';
import {environment} from '../../../environments/environment.prod';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: [require('./toolbar.component.scss')]
})
export class ToolbarComponent implements OnInit {
  @Input() title;

  constructor(private snackbarService: SnackbarService,
              public dialog: MatDialog,
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
      case 'about': {
        const dialogRef = this.dialog.open(AboutDialogComponent, <MatDialogConfig>{
          disableClose: true,
          data: {
            title: 'About',
            name: environment.NAME,
            version: environment.VERSION,
            license: environment.LICENSE,
            homepage: environment.HOMEPAGE,
          }
        });
        break;
      }
      default: {
        this.snackbarService.showSnackbar(`Clicked on ${menuItem}`, null);
      }
    }
  }
}
