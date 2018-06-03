import {Component, Input, OnInit} from '@angular/core';
import {OperatingSystem} from '../../model/operating-system';
import {PlatformService} from '../../services/platform.service';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.scss']
})
export class PrimaryComponent implements OnInit {
  @Input() title = '';
  operatingSystem = '';

  constructor(private platformService: PlatformService) {
    this.operatingSystem = `${OperatingSystem[platformService.operatingSystem]}`;
  }

  ngOnInit() {
  }
}
