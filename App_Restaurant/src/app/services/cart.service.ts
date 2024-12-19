import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartItemsCount = new BehaviorSubject<number>(0);

  cartItemsCount$ = this.cartItemsCount.asObservable();

  addToCart(dish: {_id: string, name: string, price: number, picture: string }) {
    const itemIndex = this.cartItems.findIndex(item => item._id === dish._id);
    console.log(dish.picture)
    if (itemIndex !== -1) {
      // If item already exists in cart, increase quantity
      this.cartItems[itemIndex].quantity++;
    } else {
      // If item doesn't exist, add it with quantity 1
      this.cartItems.push({ ...dish, quantity: 1 });
    }

    // Update the cart item count after modification
    this.cartItemsCount.next(this.getCartItemCount());
  }

  getCartItems() {
    return this.cartItems;
  }

  addAgainToCart(dishId: string) {
    const itemIndex = this.cartItems.findIndex(item => item._id === dishId);
    
    if (itemIndex !== -1) {
      this.cartItems[itemIndex].quantity++;
      
      // Update the cart item count after modification
      this.cartItemsCount.next(this.getCartItemCount());
    }
  }

  removeFromCart(dishId: string) {
    const itemIndex = this.cartItems.findIndex(item => item._id === dishId);
    if (this.cartItems[itemIndex].quantity > 1) {
      this.cartItems[itemIndex].quantity--;
    } else {
      this.cartItems = this.cartItems.filter(item => item._id !== dishId);  
    }
    this.cartItemsCount.next(this.getCartItemCount());
  }
  removeAllFromCart() {
    this.cartItems=[]
    this.cartItemsCount.next(this.getCartItemCount());
  }
  getTotalPrice(): number {
    return Math.round(this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) * 100) / 100;
  }

  getCartItemCount(): number {
    let nb = 0;
    for (const item of this.cartItems) {
      nb += item.quantity; // Sum the quantity of each item
    }
    return nb;
  }
  
  }

