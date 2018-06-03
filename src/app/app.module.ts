import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {PlatformService} from './services/platform.service';
import {NgModule} from '@angular/core';
import {ToolbarComponent} from './view/toolbar/toolbar.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatMenuModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {PouchDBService} from './services/pouchdb.service';
import {SnackbarService} from './services/snackbar.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {AboutDialogComponent} from './view/dialogs/app-info/about-dialog/about-dialog.component';
import {PrimaryComponent} from './view/pages/primary/primary.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutDialogComponent,
    PrimaryComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [
    PlatformService,
    PouchDBService,
    SnackbarService
  ],
  bootstrap: [
    AppComponent,
    AboutDialogComponent
  ]
})
export class AppModule {
}
