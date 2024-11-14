import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule  
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css'],
  standalone :true
})
export class DishComponent {
  @Input() dish: { id: number, name: string, description: string, price: number, photo: string, type: string }= {
    id :0 ,
    name : 'The Lovely Burger',
    description:"burger de fou,",
    price:19.99,
    type:'Dish', 
    photo:'./assets/burger.jpeg',
  };

  constructor(private cartService: CartService) {} // Injection du service CartService

  onAddToCart(event: MouseEvent | undefined) {
    this.cartService.addToCart({
      id: this.dish.id,
      name: this.dish.name,
      price: this.dish.price,
      photo: this.dish.photo
    });
    if(event){
      const button = event.target as HTMLElement;  // Cibler le bouton cliqué
      button.classList.add('btn-clicked');

      // Enlever la classe après l'animation (300 ms)
      setTimeout(() => {
        button.classList.remove('btn-clicked');
      }, 300);
    }
  }  
}
