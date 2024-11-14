import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { DishComponent } from '../dish/dish.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-starter-list',
  standalone: true,
  imports: [CommonModule,DishComponent,RouterLink,RouterLinkActive],
  templateUrl: './starter-list.component.html',
  styleUrl: './starter-list.component.css'
})
export class StarterListComponent {
//a remplacer quand on aura api
starters = [
  {
    id: 1,
    name: 'The Lovely Salad',
    description: 'High quality beef medium to well with cheese and bacon on a multigrain bun',
    price: 13.99,
    photo: 'assets/salade.webp',
    type: 'Starter'
  },
  {
    id: 2,
    name: 'Charcuterie board ',
    description: 'High quality beef hot dog with mustard and onions',
    price: 11.99,
    photo: 'assets/planche.jpg',
    type: 'Starter'
  },
  {
    id: 1,
    name: 'The Lovely Salad',
    description: 'High quality beef medium to well with cheese and bacon on a multigrain bun',
    price: 13.99,
    photo: 'assets/salade.webp',
    type: 'Starter'
  },
  {
    id: 2,
    name: 'Charcuterie board ',
    description: 'High quality beef hot dog with mustard and onions',
    price: 11.99,
    photo: 'assets/planche.jpg',
    type: 'Starter'
  },
];
}
