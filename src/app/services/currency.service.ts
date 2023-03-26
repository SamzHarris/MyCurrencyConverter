import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) {}

  getItems() {

    let items = JSON.parse(window.localStorage.getItem('items') || '{}');
    if (items === null) {
      items = [];
    }
    return items;
  }

  addItem(addItem: string) {
    const itemsStored = window.localStorage.getItem('items');
    let items = [];
    if (itemsStored !== null) {
      items = JSON.parse(itemsStored);
    }
    const item: Item = {
      id: items.length + 1,
      name: addItem
    };
    items.push(item);
    window.localStorage.setItem('items', JSON.stringify(items));
  }

  deleteItem(deleteItem: Item) {
    const items = JSON.parse(window.localStorage.getItem('items') || '{}');
    console.log(items);
    console.log(deleteItem);
    const saved = items.filter((item: { id?: number; }) => {
      return item.id !== deleteItem.id;
    });
    window.localStorage.setItem('items', JSON.stringify(saved));
  }

  getCurrencyList() {
    const headers = new HttpHeaders({'Content-Type' : 'application/json', 'apiKey': environment.fixerApiKey});
    const options = {headers};
    return this.http.get<Response>(environment.fixerUrl, options).pipe(
        map((response: Response) => response),
        catchError(err => {
          console.log(err);
          return of([]);
        })
    );
  }
}
