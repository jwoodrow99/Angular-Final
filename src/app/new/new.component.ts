import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Item } from '../item/item-helper'
import { ItemService } from '../services/item.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
    newItem: Item;
}

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

    @Input() startingId; // made it dynamic so it's based on the current length of the band list
    @Output() newEvent = new EventEmitter<Item>();
    newItem: Item;
    currentId: number;

    itemList: Item[];

    constructor(public dialog: MatDialog, private itemService: ItemService) {
        this.resetNewItem();
        this.itemList = [];
    }

    ngOnInit(): void {
        this.currentId = this.startingId;
    }

    resetNewItem() {
        this.newItem = {
            name: '',
            description: '',
            price: 0
        };
    }

    addItem(): void {
        this.newEvent.emit(this.newItem);
        this.addItemT(this.newItem);
        this.resetNewItem();
    }

    addItemT(newItem: Item) {
        this.itemService.addItem(newItem).subscribe(item => this.itemList.push(item));
        const myClonedArray  = Object.assign([], this.itemList);
        this.itemList = myClonedArray;
    }

    openDialog() {
        const dialogRef = this.dialog.open(NewDialogComponent, {
            width: '350px',
            data: {newItem: this.newItem}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
            this.newItem = result;
            this.addItem();
        });
    }
}

@Component({
    selector: 'new-dialog',
    templateUrl: './new-dialog.component.html',
})

export class NewDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<NewDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
