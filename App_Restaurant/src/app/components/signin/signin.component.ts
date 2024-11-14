import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  standalone: true,
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  imports:[CommonModule,FormsModule,RouterOutlet,RouterModule]
})

export class SigninComponent {
  mail: string = '';
  password: string = '';
  phone:string='';
  username:string='';
  confirmpassword:string='';
  errorMessage: string | null=null;

  constructor(private authService: AuthService, private router: Router) {}

  onSignin(): void {
    // Check if password and confirm password match
    if (this.password !== this.confirmpassword) {
      this.errorMessage = 'Passwords do not match!';
      return; // Stop form submission if passwords don't match
    }
    if(this.mail !=="" && this.phone !=="" && this.username !="" && this.password !=""){
      this.router.navigate(['/dishes']); // Redirect to the dishes page after successful signin
      this.authService.signin(this.username,this.mail,this.phone,this.password,)
      // Reset error message
      this.errorMessage = null;
      return
    }
    this.errorMessage = 'Fill everything!';
    return
      
  }
}
