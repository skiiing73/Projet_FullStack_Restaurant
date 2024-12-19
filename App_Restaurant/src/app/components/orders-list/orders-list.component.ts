import { Component } from '@angular/core';
import { OrderComponent } from "../order/order.component";
import { Dish } from '../../../dish';
import { Order } from '../../../order';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [OrderComponent,CommonModule],
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent {

  // Sample orders data, each order is a list of dishes
  orders: Order[] = [
    new Order([
      new Dish("1", 'The Lovely Burger', 19.99, 'Main Dish', 'assets/burger.jpeg', 'A delicious burger'),
      new Dish("2", 'American HOT DOG', 15.99, 'Main Dish', 'assets/hotdog.jpeg', 'Classic American hot dog')
    ]),
    new Order([
      new Dish("2", 'The Lovely Burger', 19.99, 'Main Dish', 'assets/burger.jpeg', 'A delicious burger')
    ]),
    new Order([
      new Dish("2", 'The Lovely Burger', 19.99, 'Main Dish', 'assets/burger.jpeg', 'A delicious burger'),
      new Dish("2", 'American HOT DOG', 15.99, 'Main Dish', 'assets/hotdog.jpeg', 'Classic American hot dog')
    ]),
  ];
}
