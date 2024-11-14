import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { DishComponent } from '../dish/dish.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { DishService } from '../../services/dish.service'; // Importer le service DishService

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css'],
  imports: [CommonModule, DishComponent, RouterLink, RouterLinkActive],
  standalone: true
})
export class DishListComponent implements OnInit {
  dishes: any[] = [];  // Liste des plats récupérée de l'API

  constructor(private dishService: DishService) {} // Injection du service

  ngOnInit() {
    // Appeler l'API pour récupérer les plats
    this.dishService.getDishes().subscribe((dishesData) => {
      this.dishes = dishesData;  // Mettre à jour les plats dans le composant
    });
  }
}
