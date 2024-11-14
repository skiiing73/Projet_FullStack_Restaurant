import { Component, Input } from '@angular/core';
import { Order } from '../../../order';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-order',
  standalone: true,
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  imports:[CommonModule]
})
export class OrderComponent {
  @Input() order!: Order;

  constructor(private cartService: CartService) {}

  onAddToCart() {
    this.order.dishes.forEach(dish => {
      this.cartService.addToCart({
        id: dish.id,
        name: dish.name,
        price: dish.price,
        photo: dish.photo
      });
      console.log(`${dish.name} added to cart!`);
    });
  }
}
