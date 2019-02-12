import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Item } from '../../../components/store/item.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  storeItemList: AngularFireList<Item[]>;
  items: Observable<any[]>;

  constructor(
    private firebase: AngularFireDatabase) {
      this.storeItemList = firebase.list('/items');
  }
}
