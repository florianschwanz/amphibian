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
export class ToolbarComponent {
  @Input() title;

  constructor(private snackbarService: SnackbarService,
              public dialog: MatDialog) {
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
