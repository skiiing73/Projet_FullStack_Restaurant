import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import confetti from 'canvas-confetti';
import { OrderService } from '../../services/order.service';
import { RecommandationComponent } from '../recommandation/recommandation.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [CommonModule, RecommandationComponent]
})

export class CartComponent {
  
  cartItems: any[] = [];
  cartsubmit:boolean =false;
  constructor(private router: Router, private cartService : CartService,private orderService:OrderService) {}
 
  ngOnInit() {
    // Initialize cartItems once the component is initialized
    this.cartItems = this.cartService.getCartItems();
  }
 
  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }
  
  addAgainToCart(Item_id:string){
    this.cartService.addAgainToCart(Item_id);
    this.cartItems=this.cartService.getCartItems();
  
  }
  removeFromCart(item_id: string) {
    this.cartService.removeFromCart(item_id);
    this.cartItems = this.cartService.getCartItems(); 
  }

  goToHome(){
    this.router.navigate(['/dishes']);
  }

  checkout() {
    const list_id_dish: string[] = [];
    const username = localStorage.getItem("username");
    const status = "completed";
  
    // Construire la liste des IDs des plats en tenant compte des quantités
    this.cartItems.forEach((item) => {
      for (let i = 0; i < item.quantity; i++) {
        list_id_dish.push(item._id); // Utiliser `_id` pour ajouter l'ID des plats
      }
    });
  
    // Créer l'objet commande
    const order = {list_id_dish, username, status };
    console.log("Liste des IDs des plats : ", list_id_dish);
    console.log("Commande complète : ", order);
  
    // Effet de confettis pour la confirmation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  
    // Envoyer la commande via le service
    if (username){
      this.orderService.sendOrder(order).subscribe(
        (response) => {
          console.log('Commande envoyée avec succès :', response);
          this.cartService.removeAllFromCart(); // Vider le panier après la commande
          this.cartItems = this.cartService.getCartItems(); // Rafraîchir le panier
          this.cartsubmit = true;
          setTimeout(() => {
            this.cartsubmit = false;
          }, 7000);
        },
        (error) => {
          console.error('Erreur lors de l\'envoi de la commande :', error);
        }
      );
    }
  }
  
}
