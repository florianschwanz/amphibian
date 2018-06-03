import {Component} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {SnackbarService} from './services/snackbar.service';
import {PouchDBService} from './services/pouchdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [require('./app.component.scss')],
})
export class AppComponent {

  constructor(public snackBar: MatSnackBar,
              private pouchDBService: PouchDBService,
              private snackbarService: SnackbarService) {
    this.pouchDBService.sync('http://localhost:5984/amphibian');
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
