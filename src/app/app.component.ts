import {Component} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {SnackbarService} from './services/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [require('./app.component.scss')],
})
export class AppComponent {
  title = 'Amphibian';

  constructor(public snackBar: MatSnackBar,
              private snackbarService: SnackbarService) {
    this.snackbarService.messageSubject.subscribe(snack => {
        this.openSnackBar(snack[0], snack[1]);
      }
    );
  }

  /**
   * Handles messages that shall be displayed in a snack bar
   * @param message
   * @param action
   */
  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, <MatSnackBarConfig>{
      duration: 5000,
    });
  }
}
