import { Injectable } from '@angular/core';

import { Item } from './item/item-helper'
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {itemList} from './db';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

    createDb(){
        const item = itemList;
        return {item};
    }

    genId(item: Item[]): number {
        return item.length > 0 ? Math.max(...item.map(item => item.id)) + 1 : 2000;
    }

}
