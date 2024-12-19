import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishService } from 'src/app/services/dish.service';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-suggestion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {
  suggestions: any[] = [];

  constructor(
    private dishService: DishService,
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  async ngOnInit() {
    const cart = this.cartService.getCartItems();
    this.dishService.getDishes().subscribe(dishes => {
      this.orderService.getOrder().subscribe(order => {
        this.suggestions = this.getRecommendedDishes(dishes, cart, order).slice(0, 5);
        console.log(this.suggestions);
      });
    });
  }

  getRecommendedDishes(allDishes: any[], userCart: any[], userOrderHistory: any[]): any[] {
    const cartDishTypes = userCart.map(dish => dish.type); // Types des plats dans le panier
    const pastOrders = userOrderHistory.map(order => order.list_dish).flat(); // Identifiants des plats commandés dans le passé

    // 1. Recommander des plats que l'utilisateur a déjà commandés, mais d'un type différent de ceux dans le panier
    const pastOrderedDifferentType = allDishes.filter(dish => 
        pastOrders.includes(dish._id.$oid) && !cartDishTypes.includes(dish.type)
    );
    if (pastOrderedDifferentType.length > 0) {
        return this.shuffleArray(pastOrderedDifferentType);
    }

    // 2. Recommander des plats d'un type différent de ceux présents dans le panier
    const dishesDifferentType = allDishes.filter(dish => !cartDishTypes.includes(dish.type));
    if (dishesDifferentType.length > 0) {
        return this.shuffleArray(dishesDifferentType);
    }

    // 3. Si aucun plat d'un autre type n'est disponible, recommander des plats déjà commandés
    const pastOrderedDishes = allDishes.filter(dish => pastOrders.includes(dish._id.$oid));
    if (pastOrderedDishes.length > 0) {
        return this.shuffleArray(pastOrderedDishes);
    }

    // 4. Sinon, recommander des plats aléatoires
    return this.shuffleArray(allDishes);
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}