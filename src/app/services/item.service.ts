import { Injectable } from '@angular/core';
import { Item } from '../item/item-helper'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

    constructor(private http: HttpClient) { }

    getItem(id: number) : Observable<Item[]>{
        return this.http.get<Item[]>("api/item/" + id);
    }

    getItemObs(): Observable<Item[]>{
        return this.http.get<Item[]>("api/item");
    }

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };

    addItem(item: Item): Observable<Item>{
        return this.http.post<Item>("api/item", item, this.httpOptions);
    }

    deleteItem(id: Item): Observable<Item>{
        return this.http.delete<Item>("api/item/" + id, this.httpOptions);
    }
}
