import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  id:number = 0;
  title:string = ' ';
  price:number = 0;
  quantity:number = 0;

  constructor (private intemService:ItemService, private router:Router, private analytics: AngularFireAnalytics){ }

  ngOnInit(): void {

  }
  onSubmit () {
    //event.preventDefault();
    const item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.price = this.price;
    item.completed = false;
    this.intemService.addItem(item);

    this.analytics.logEvent('formulario_enviado', {
      parametro_1: 'parametro1_formulario',
      parametro_2: 'parametro2_formulario',
      parametro_3: 'parametro3_formulario',
      parametro_4: 'parametro4_formulario',
    });

    this.router.navigate(['/']);

  }
}
