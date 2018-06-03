import {Component, isDevMode, OnInit} from '@angular/core';
import {PouchDBService} from '../../../services/pouchdb.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {
  title = 'Database';

  items = new Map<String, String>();
  itemsList = [];

  constructor(private pouchDBService: PouchDBService) {
    this.pouchDBService.fetch().then(result => {
        result.rows.forEach(r => {
          console.log(`DEBUG item ${JSON.stringify(r.doc)}`);
          this.items.set(r.doc._id, JSON.stringify(r.doc));
        });
        this.update();
      }, error => {
        if (isDevMode()) {
          console.error(error);
        }
      }
    );
    this.pouchDBService.getChangeListener().subscribe(
      item => {
        (item['change']['docs']).forEach(d => {
          console.log(`DEBUG item ${d}`);
          this.items.set(d._id, JSON.stringify(d as string));
          this.update();
        });
      }
    );
  }

  ngOnInit() {
  }

  update() {
    this.itemsList = Array.from(this.items.values());
  }

}
