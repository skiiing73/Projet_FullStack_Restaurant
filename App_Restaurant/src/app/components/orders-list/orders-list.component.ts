import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.css'
})
export class OrdersListComponent {
//a remplacer quand on aura api
orders = [
  [
  {
    id: 1,
    name: 'The Lovely Burger',
    price: 19.99,
    photo: 'assets/burger.jpeg',
    type: 'Main Dish'
  },
  {
    id: 2,
    name: 'American HOT DOG',
    price: 15.99,
    photo: 'assets/hotdog.jpeg',
    type: 'Main Dish'
  },
  ],
  [
    {
      id: 1,
      name: 'The Lovely Burger',
      price: 19.99,
      photo: 'assets/burger.jpeg',
      type: 'Main Dish'
    },
    ]
];
}
