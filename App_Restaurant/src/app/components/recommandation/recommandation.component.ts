import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishService } from '../../services/dish.service';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { DishRecommondationsComponent } from '../dish-recommandations/dish-recommandations.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { symlinkSync } from 'node:fs';


@Component({
  selector: 'app-recommandations',
  standalone: true,
  imports: [CommonModule, DishRecommondationsComponent, RouterModule],
  templateUrl: './recommandation.component.html',
  styleUrls: ['./recommandation.component.css']
})

export class RecommandationComponent implements OnInit {
  recommandations: any[] = [];

  constructor(
    private dishService: DishService,
    private cartService: CartService
  ) {}

  async ngOnInit() {
    const cart = this.cartService.getCartItems();
    this.dishService.getAllDish().subscribe(dishes => {
        this.recommandations = this.getRecommendedDishes(dishes, cart);
        
    });
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  getRecommendedDishes(allDishes: any[], userCart: any[]): any[] {
    const cartDishIds = userCart.map(dish => dish._id);

    // Filtrer les plats qui ne sont pas dans le panier
    const dishesNotInCart = allDishes.filter(dish => !cartDishIds.includes(dish._id));
    console.log(dishesNotInCart)

    // Mélanger les plats restants
    const shuffledDishes = this.shuffleArray(dishesNotInCart);

    // Retourner un maximum de 5 plats aléatoires
    return shuffledDishes.slice(0, 5);
  }
}