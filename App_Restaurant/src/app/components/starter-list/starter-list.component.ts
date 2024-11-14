import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { DishComponent } from '../dish/dish.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { DishService } from '../../services/dish.service';
@Component({
  selector: 'app-starter-list',
  standalone: true,
  imports: [CommonModule,DishComponent,RouterLink,RouterLinkActive],
  templateUrl: './starter-list.component.html',
  styleUrl: './starter-list.component.css'
})
export class StarterListComponent implements OnInit {
  starters: any[] = [];  // Liste des plats récupérée de l'API

  constructor(private dishService: DishService) {} // Injection du service

  ngOnInit() {
    // Appeler l'API pour récupérer les plats
    this.dishService.getStarter().subscribe((dishesData) => {
      this.starters = dishesData;  // Mettre à jour les plats dans le composant
    });
  }
}