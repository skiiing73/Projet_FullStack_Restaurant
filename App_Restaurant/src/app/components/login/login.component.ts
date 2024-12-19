import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports:[CommonModule,FormsModule,RouterModule]
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  showPassword: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        // Si la connexion est réussie
        this.router.navigate(['/dishes']); // Redirige vers la page des plats
        window.location.reload();
      },
      error => {
        // Si une erreur se produit (par exemple, mauvais identifiants)
        this.errorMessage = 'Invalid username or password';
        console.error('Login failed', error); // Affiche l'erreur dans la console
      }
    );
  }
  
  togglePasswordVisibility() {    
    this.showPassword = !this.showPassword;
  }
}
