import {Component, OnInit} from '@angular/core';
import {MatIconRegistry, MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {SnackbarService} from './services/snackbar.service';
import {PouchDBService} from './services/pouchdb.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [require('./app.component.scss')],
})
export class AppComponent implements OnInit {

  constructor(public snackBar: MatSnackBar,
              private pouchDBService: PouchDBService,
              private snackbarService: SnackbarService,
              private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
    this.pouchDBService.sync('http://localhost:5984/amphibian');
    this.snackbarService.messageSubject.subscribe(snack => {
        this.openSnackBar(snack[0], snack[1]);
      }
    );
  }

  ngOnInit() {
    this.initializeIcons();
  }

  initializeIcons() {
    const ICON_ROOT_DIR = 'assets/material-design-icons';
    // const VARIANT_DESIGN = 'design';
    const VARIANT_PRODUCTION = 'production';
    const VARIANT = VARIANT_PRODUCTION;

    class Icon {
      topic: string;
      name: string;
      file: string;

      constructor(topic: string, name: string, file: string) {
        this.topic = topic;
        this.name = name;
        this.file = file;
      }
    }

    // const ACTION = 'action';
    // const ALERT = 'alert';
    // const AV = 'av';
    const CONTENT = 'content';
    // const COMMUNICATION = 'communication';
    // const EDITOR = 'editor';
    // const FILE = 'file';
    // const IMAGE = 'image';
    // const MAPS = 'maps';
    const NAVIGATION = 'navigation';
    // const SOCIAL = 'social';

    const icons: Icon[] = [];
    icons.push(new Icon(CONTENT, 'save', 'ic_save_24px.svg'));
    icons.push(new Icon(NAVIGATION, 'menu', 'ic_menu_24px.svg'));
    icons.push(new Icon(NAVIGATION, 'more_vert', 'ic_more_vert_24px.svg'));

    icons.forEach(icon => {
      this.iconRegistry.addSvgIcon(icon.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(ICON_ROOT_DIR + '/' + icon.topic + '/svg/' + VARIANT + '/' + icon.file));
    });

    this.iconRegistry.addSvgIcon('blank', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_blank_24px.svg'));
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
