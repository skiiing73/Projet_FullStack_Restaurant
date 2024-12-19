import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import confetti from 'canvas-confetti';
import { OrderService } from '../../services/order.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone:true,
  imports: [CommonModule]
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
    confetti({
      particleCount: 100, 
      spread: 70, 
      origin: { y: 0.6 }
    });

    this.orderService.sendOrder(this.cartItems).subscribe(

      (response) => {
        console.log('Command send successfully:', response);
        this.cartService.removeAllFromCart();
        this.cartItems = this.cartService.getCartItems();
        this.cartsubmit=true;
        setTimeout(() => {
          this.cartsubmit=false;
        }, 7000);
      },
      (error) => {
        console.error('Error updating profile:', error);
      }
    );
    
    
  }
}
