import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone:true,
  imports: [HeaderComponent,CommonModule,RouterOutlet]
})
export class CartComponent {
  
  cartItems: any[] = [];
  constructor(private router: Router, private cartService : CartService) {}
 
  ngOnInit() {
    // Initialize cartItems once the component is initialized
    this.cartItems = this.cartService.getCartItems();
  }

 
  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  
  addAgainToCart(ItemId:number){
    this.cartService.addAgainToCart(ItemId);
    this.cartItems=this.cartService.getCartItems();
  
  }
  removeFromCart(itemId: number) {
    this.cartService.removeFromCart(itemId);
    this.cartItems = this.cartService.getCartItems(); 
  }

  goToHome(){
    this.router.navigate(['/dishes']);
  }

  // Proceed to checkout (this could be a separate process)
  checkout() {
    alert('Proceeding to checkout');
  }
  getCartItemCount(): number {
    return this.cartItems.length;
  }
}
