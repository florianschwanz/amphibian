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
import {AppRoutingModule} from './app-routing.module';
import {SplashScreenComponent} from './view/pages/splash-screen/splash-screen.component';
import {HomeComponent} from './view/pages/home/home.component';
import { DatabaseComponent } from './view/pages/database/database.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutDialogComponent,
    DatabaseComponent,
    HomeComponent,
    SplashScreenComponent,
    ToolbarComponent
  ],
  imports: [
    AppRoutingModule,
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
    AppComponent
  ]
})
export class AppModule {
}
