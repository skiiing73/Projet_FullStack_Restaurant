import { Component } from '@angular/core';

import { CommonModule } from '@angular/common'; // Import CommonModule
import { DishComponent } from '../dish/dish.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dessert-list',
  standalone: true,
  imports: [CommonModule,DishComponent,RouterLink,RouterLinkActive],
  templateUrl: './dessert-list.component.html',
  styleUrl: './dessert-list.component.css'
})
export class DessertListComponent {
//a remplacer quand on aura api
dessert = [
  {
    id: 5,
    name: 'The Lovely Cake',
    description: 'High quality beef medium to well with cheese and bacon on a multigrain bun',
    price: 9.99,
    photo: 'assets/cake.jpg',
    type: 'Dessert'
  },
  {
    id: 6,
    name: 'Lemon Tart',
    description: 'High quality beef hot dog with mustard and onions',
    price: 5.99,
    photo: 'assets/tarte.webp',
    type: 'Dessert'
  },
  {
    id: 5,
    name: 'The Lovely Cake',
    description: 'High quality beef medium to well with cheese and bacon on a multigrain bun',
    price: 9.99,
    photo: 'assets/cake.jpg',
    type: 'Dessert'
  },
  {
    id: 6,
    name: 'Lemon Tart',
    description: 'High quality beef hot dog with mustard and onions',
    price: 5.99,
    photo: 'assets/tarte.webp',
    type: 'Dessert'
  },
];
}
