import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../shared/services/store/store.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Item } from './item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  // allItems: Item[];
  items: AngularFireList<any>;

  constructor(
    private storeService: StoreService,
    private firebase: AngularFireDatabase
  ) {
    firebase.list<Item>('/item').valueChanges().subscribe(console.log);
  }

  ngOnInit() {
  }
}
