import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url:string = 'http://localhost:3000/items';
  httpOptions = {
    Headers:{
      'Content-Type': 'application/json'
    }
  };

  items:Item[] =[
    {
      id: 0,
      title: 'Manazana',
      price: 10,
      quantity: 4,
      completed: false
    },
    {
      id: 1,
      title: 'Pan',
      price: 3.5,
      quantity: 8,
      completed: true
    },
    {
      id: 2,
      title: 'Naranja',
      price: 30,
      quantity: 1,
      completed: false
    }
  ];
  constructor(private http:HttpClient) { }

  getItems (){
      return this.items
}
 // getItems (): Observable <Item[]>{
    //return this.http.get<Item[]>(this.url);

  //}
  addItem(item:Item){
   this.items.unshift(item);
 }
  //addItem (item:Item):Observable<Item>{

    //return this.http.post<Item>(this.url, item, this.httpOptions);
  //}

}
