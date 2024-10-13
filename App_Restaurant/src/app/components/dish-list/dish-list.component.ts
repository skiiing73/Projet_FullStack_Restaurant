import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { DishComponent } from '../dish/dish.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css'],
  imports: [CommonModule, DishComponent,RouterLink,RouterLinkActive],
  standalone:true
})
export class DishListComponent {
  //a remplacer quand on aura api
  dishes = [
    {
      id: 4,
      name: 'The Lovely Burger',
      description: 'High quality beef medium to well with cheese and bacon on a multigrain bun',
      price: 19.99,
      photo: 'assets/burger.jpeg',
      type: 'Main Dish'
    },
    {
      id: 3,
      name: 'American HOT DOG',
      description: 'High quality beef hot dog with mustard and onions',
      price: 15.99,
      photo: 'assets/hotdog.jpeg',
      type: 'Main Dish'
    },
    {
      id: 3,
      name: 'American HOT DOG',
      description: 'High quality beef hot dog with mustard and onions',
      price: 15.99,
      photo: 'assets/hotdog.jpeg',
      type: 'Main Dish'
    },
    {
      id: 3,
      name: 'American HOT DOG',
      description: 'High quality beef hot dog with mustard and onions',
      price: 15.99,
      photo: 'assets/hotdog.jpeg',
      type: 'Main Dish'
    }
  ];
}
