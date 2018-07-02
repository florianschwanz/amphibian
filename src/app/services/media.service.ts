import {Injectable} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Subject} from 'rxjs/Subject';
import {Media} from '../model/media.enum';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  media: Media;
  mediaSubject = new Subject<Media>();

  constructor(public breakpointObserver: BreakpointObserver) {

    this.initializeSize();

    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.media = Media.SMALL;
          this.notify();
        }
      });
    this.breakpointObserver
      .observe([Breakpoints.Medium])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.media = Media.MEDIUM;
          this.notify();
        }
      });
    this.breakpointObserver
      .observe([Breakpoints.Large])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.media = Media.LARGE;
          this.notify();
        }
      });
  }

  private initializeSize() {

    const innerWidth = window.innerWidth;

    if (innerWidth < 960) {
      this.media = Media.SMALL;
      this.notify();
    } else if (innerWidth >= 960 && innerWidth < 1280) {
      this.media = Media.MEDIUM;
      this.notify();
    } else if (innerWidth > 1280) {
      this.media = Media.LARGE;
      this.notify();
    }
  }

  private notify() {
    this.mediaSubject.next(this.media);
  }
}
