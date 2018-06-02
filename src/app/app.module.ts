import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {PlatformService} from './services/platform.service';
import {NgModule} from '@angular/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PlatformService],
  bootstrap: [AppComponent]
})
export class AppModule { }
