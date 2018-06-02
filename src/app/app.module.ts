import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {PlatformService} from './services/platform.service';
import {NgModule} from '@angular/core';
import {ToolbarComponent} from './view/toolbar/toolbar.component';
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {PouchDBService} from './services/pouchdb.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [
    PlatformService,
    PouchDBService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
