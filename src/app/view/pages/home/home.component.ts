import {Component, Input, OnInit} from '@angular/core';
import {OperatingSystem} from '../../../model/operating-system';
import {PlatformService} from '../../../services/platform.service';

@Component({
  selector: 'app-primary',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Amphibian';
  operatingSystem = '';

  constructor(private platformService: PlatformService) {
    this.operatingSystem = `${OperatingSystem[platformService.operatingSystem]}`;
  }

  ngOnInit() {
  }
}
