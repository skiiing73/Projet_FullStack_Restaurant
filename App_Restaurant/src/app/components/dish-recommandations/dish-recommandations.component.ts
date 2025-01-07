
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule  
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-dish-recommandations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dish-recommandations.component.html',
  styleUrl: './dish-recommandations.component.css'
})

export class DishRecommondationsComponent {

  @Input() dish: { _id: string, name: string, description: string, price: number, picture: string, type: string } = {
    _id: "1",
    name: 'The Lovely Burger',
    description: "burger de fou,",
    price: 19.99,
    type: 'Dish',
    picture: './assets/burger.jpeg',
  };

  constructor(private cartService: CartService, private router: Router) {} // Injection du service Router

  onAddToCart(event: MouseEvent | undefined) {
    this.cartService.addToCart({
      _id: this.dish._id,
      name: this.dish.name,
      price: this.dish.price,
      picture: this.dish.picture
    });
    if (event) {
      const button = event.target as HTMLElement;  // Cibler le bouton cliqué
      button.classList.add('btn-clicked');

      // Enlever la classe après l'animation (300 ms)
      setTimeout(() => {
        button.classList.remove('btn-clicked');
      }, 300);
    }
  }

  onSeeOpinion(_id: string) {
    this.router.navigate(['/opinion', _id]); // Naviguer vers la route avec l'ID du plat comme paramètre
  }
}

