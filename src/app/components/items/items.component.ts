import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{

    items:Item[] = [];
    total:number = 0;

  constructor (private itemService:ItemService, private analytics: AngularFireAnalytics){ }

  ngOnInit(): void {
    //this.items =[];
    this.items=this.itemService.getItems();
    this.getTotal ();
  }


  deleteItem (item: Item){
    this.items = this.items.filter(x => x.id != item.id);
    this.analytics.logEvent('eliminar_item', {
      item_name: item.title,
    });
    this.getTotal();
  }

  toggleItem(item:Item){
    this.getTotal();
  }

  getTotal(){
    this.total = this.items
    .filter(item => item.completed === false)
    .map(item => item.price * item.quantity)
    .reduce((acc, item) => acc += item, 0);
  }

}
