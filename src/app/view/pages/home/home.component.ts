import {Component, OnDestroy, OnInit} from '@angular/core';
import {OperatingSystem} from '../../../model/operating-system.enum';
import {PlatformService} from '../../../services/platform.service';
import {MediaService} from '../../../services/media.service';
import {takeUntil} from 'rxjs/internal/operators';
import {Media} from '../../../model/media.enum';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-primary',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  title = 'Amphibian';
  operatingSystem = '';
  media = '';

  private unsubscribeSubject = new Subject();

  constructor(private mediaService: MediaService,
              private platformService: PlatformService) {
  }

  ngOnInit() {

    this.initializeMediaSubscription();

    this.media = `${Media[this.mediaService.media]}`;
    this.operatingSystem = `${OperatingSystem[this.platformService.operatingSystem]}`;
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }

  //
  // Initialization
  //

  private initializeMediaSubscription() {

    this.mediaService.mediaSubject.pipe(
      takeUntil(this.unsubscribeSubject)
    ).subscribe((value) => {
      this.media = `${Media[value as Media]}`;
    });
  }
}
