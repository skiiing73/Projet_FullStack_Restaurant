import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the router to navigate between pages

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true // This ensures the component is standalone
})
export class HeaderComponent {
  // Properties for the header
  restaurantName: string = ' Name Restaurant'; // Restaurant name in the center
  profilePhoto: string = './assets/profile.jpeg'; // Path to the profile photo
  menuOpen: boolean = false; // Controls whether the menu dropdown is shown

  // Inject Router for navigation
  constructor(private router: Router) {}

  // Method to navigate to the cart page
  goToCart() {
    this.router.navigate(['/cart']); // Adjust the route as per your routing setup
  }

  // Method to navigate to the profile page
  goToProfile() {
    this.router.navigate(['/profile']); // Adjust the route as per your routing setup
  }

  // Method to toggle the dropdown menu
  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Toggle the boolean to show/hide the menu
  }
}
