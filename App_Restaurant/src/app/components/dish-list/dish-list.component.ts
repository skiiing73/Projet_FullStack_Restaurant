import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { DishComponent } from '../dish/dish.component';
@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css'],
  imports: [CommonModule, DishComponent],
  standalone:true
})
export class DishListComponent {
  //a remplacer quand on aura api
  dishes = [
    {
      id: 1,
      name: 'The Lovely Burger',
      description: 'High quality beef medium to well with cheese and bacon on a multigrain bun',
      price: 19.99,
      photo: 'burger.jpeg',
      type: 'Main Dish'
    },
    {
      id: 2,
      name: 'American HOT DOG',
      description: 'High quality beef hot dog with mustard and onions',
      price: 15.99,
      photo: 'hotdog.jpeg',
      type: 'Main Dish'
    }
  ];
}
