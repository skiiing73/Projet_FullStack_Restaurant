import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', 
})
export class CartService {

  private cartItems: { id: number, name: string, price: number, quantity: number, photo: string }[] = [];

  addToCart(dish: { id: number, name: string, price: number, photo: string }) {
    const itemIndex = this.cartItems.findIndex(item => item.id === dish.id);
    
   
    if (itemIndex !== -1) {
      this.cartItems[itemIndex].quantity++;
    } else {
      this.cartItems.push({ ...dish, quantity: 1 });
    }
  }

  
  getCartItems() {
    return this.cartItems;
  }

  addAgainToCart(dishId: number) {
    const itemIndex = this.cartItems.findIndex(item => item.id === dishId);
    
      this.cartItems[itemIndex].quantity++;  
   
  }

  removeFromCart(dishId: number) {
    const itemIndex = this.cartItems.findIndex(item => item.id === dishId);
    if (this.cartItems[itemIndex].quantity > 1) {
      this.cartItems[itemIndex].quantity--;  
    } else {
      this.cartItems = this.cartItems.filter(item => item.id !== dishId);  
    }
  }

  getTotalPrice(): number {
    return Math.round(this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)*100)/100;
  }
}
