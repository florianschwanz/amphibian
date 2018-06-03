import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {PlatformService} from './services/platform.service';
import {NgModule} from '@angular/core';
import {ToolbarComponent} from './view/toolbar/toolbar.component';
import {MatButtonModule, MatIconModule, MatMenuModule, MatSnackBarModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {PouchDBService} from './services/pouchdb.service';
import {SnackbarService} from './services/snackbar.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PrimaryComponent } from './view/primary/primary.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PrimaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
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
    AppComponent
  ]
})
export class AppModule {
}
