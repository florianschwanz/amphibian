import {Component, isDevMode, OnInit} from '@angular/core';
import {OperatingSystem} from '../../../model/operating-system';
import {PlatformService} from '../../../services/platform.service';
import {PouchDBService} from '../../../services/pouchdb.service';

@Component({
  selector: 'app-primary',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Amphibian';
  operatingSystem = '';

  constructor(private platformService: PlatformService,
              private pouchDBService: PouchDBService) {
    this.operatingSystem = `${OperatingSystem[platformService.operatingSystem]}`;
  }

  ngOnInit() {
  }
}
