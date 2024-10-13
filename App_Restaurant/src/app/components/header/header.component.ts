import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the router to navigate between pages
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports:[RouterOutlet,RouterModule]
})
export class HeaderComponent {
  // Properties for the header
  restaurantName: string = ' Amazing Restaurant'; // Restaurant name in the center
  profilePhoto: string = './assets/profile.jpeg'; // Path to the profile photo
  menuOpen: boolean = false; // Controls whether the menu dropdown is shown

  // Inject Router for navigation
  constructor(private router: Router) {}

  // Method to navigate to the cart page
  goToCart() {
    this.router.navigate(['/cart']); 
    this.menuOpen = false;
  }

  // Method to navigate to the profile page
  goToProfile() {
    this.router.navigate(['/profile']); 
    this.menuOpen = false;
  }
  // Method to navigate to the Home page
  goToHome() {
    this.router.navigate(['/dishes']); 
    this.menuOpen = false;
  }
  // Method to toggle the dropdown menu
  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Toggle the boolean to show/hide the menu
  }
}
