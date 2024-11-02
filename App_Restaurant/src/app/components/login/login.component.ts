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
  imports:[CommonModule,FormsModule,RouterOutlet,RouterModule]
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  showPassword: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/dishes']); // Redirect to the dishes page after successful login
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
