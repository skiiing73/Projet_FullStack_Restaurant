import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class HeaderComponent {
  restaurantName: string = 'Amazing Restaurant';
  profilePhoto: string = './assets/profile.png';
  menuOpen: boolean = false;
  isAuthenticated: boolean = false; // Track authentication status
  nb_items: number = 0; // Holds the number of items in the cart
  private cartSubscription!: Subscription;

  constructor(private authService: AuthService, private cartService: CartService, private router: Router) {}

  ngOnInit() {
    // Subscribe to cart item count updates
    this.cartSubscription = this.cartService.cartItemsCount$.subscribe(count => {
      this.nb_items = count;
    });
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
  goToCart() {
    this.router.navigate(['/cart']);
    this.menuOpen = false;
  }

  goToProfile() {
    this.router.navigate(['/profile']);
    this.menuOpen = false;
  }

  goToHome() {
    this.router.navigate(['/dishes']);
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  goToAbout(){
    this.router.navigate(['/about']);
    this.menuOpen = false;
  }

  goToContact(){
    this.router.navigate(['/contact']);
    this.menuOpen = false;
  }
  login() {
    // Logic to authenticate user (e.g., call a login service)
    this.isAuthenticated = true; 
  }


  logout() {
    // Logic to log out user (e.g., call a logout service)
    this.isAuthenticated = false;
    this.authService.logout();
  }
}
