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
  imports:[CommonModule,FormsModule,RouterModule]
})

export class SigninComponent {
  email: string = '';
  password: string = '';
  phone:string='';
  username:string='';
  confirmpassword:string='';
  errorMessage: string | null=null;

  constructor(private authService: AuthService, private router: Router) {}

  onSignin(): void {
    // Vérifiez si le mot de passe et la confirmation du mot de passe correspondent
    if (this.password !== this.confirmpassword) {
      this.errorMessage = 'Passwords do not match!';
      return; // Arrêter la soumission du formulaire si les mots de passe ne correspondent pas
    }
  
    // Vérifiez si tous les champs sont remplis
    if (this.email !== "" && this.phone !== "" && this.username !== "" && this.password !== "") {
      this.authService.signin(this.username, this.email, this.phone, this.password).subscribe(
        _response => {
          // Si l'inscription réussie, rediriger vers la page des plats
          this.router.navigate(['/dishes']);
          
          // Réinitialiser le message d'erreur
          this.errorMessage = null;
        },
        error => {
          // Si une erreur se produit, afficher le message d'erreur spécifique
          if (error.status === 409) {
            this.errorMessage = 'Le nom d\'utilisateur est déjà pris. Veuillez en choisir un autre.';
          } else {
            this.errorMessage = 'Erreur lors de l\'inscription. Veuillez réessayer.';
          }
          console.error('Signin failed', error);
        }
      );
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs!';
    }
  }
  
}
