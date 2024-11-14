import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common'; // Import CommonModule
import { DishComponent } from '../dish/dish.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-dessert-list',
  standalone: true,
  imports: [CommonModule,DishComponent,RouterLink,RouterLinkActive],
  templateUrl: './dessert-list.component.html',
  styleUrl: './dessert-list.component.css'
})
export class DessertListComponent implements OnInit {
  dessert: any[] = [];  // Liste des plats récupérée de l'API

  constructor(private dishService: DishService) {} // Injection du service

  ngOnInit() {
    // Appeler l'API pour récupérer les plats
    this.dishService.getDessert().subscribe((dishesData) => {
      this.dessert = dishesData;  // Mettre à jour les plats dans le composant
    });
  }
}