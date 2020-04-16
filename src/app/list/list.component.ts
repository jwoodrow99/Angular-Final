import { Component, OnInit } from '@angular/core';
import { Item } from '../item/item-helper'
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    itemList: Item[];

    constructor(private itemService: ItemService) { 
        this.itemList = [];
    }

    ngOnInit(): void {
        this.itemService.getItemObs().subscribe(item => this.itemList = item);
    }

    addItem(newItem: Item) {
        this.itemService.addItem(newItem).subscribe(item => this.itemList.push(item));
        const myClonedArray  = Object.assign([], this.itemList);
        this.itemList = myClonedArray;
    }

    deleteItem(item: Item) {
        this.itemService.deleteItem(item).subscribe(() => console.log("Content updated"));
    }

}
