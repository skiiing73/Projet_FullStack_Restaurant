import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule  
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

  onAddToCart() {
    console.log(`${this.dish.name} added to cart!`);
    // Here, you can implement the logic to add the dish to the cart
  }
}
