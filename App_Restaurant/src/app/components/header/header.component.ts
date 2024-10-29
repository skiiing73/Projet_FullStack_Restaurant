import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [RouterOutlet, RouterModule,CommonModule]
})
export class HeaderComponent {
  restaurantName: string = 'Amazing Restaurant';
  profilePhoto: string = './assets/profile.jpeg';
  menuOpen: boolean = false;
  isAuthenticated: boolean = false; // Track authentication status

  constructor(private authService: AuthService, private router: Router) {}

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
