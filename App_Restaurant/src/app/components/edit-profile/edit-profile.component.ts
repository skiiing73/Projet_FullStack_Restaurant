import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service'; // Import the UserService
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  @Input() user: any; // Input to receive user data
  @Output() editComplete = new EventEmitter<void>(); // Output to notify the parent component
  errorMessage: string = '';
  constructor(private userService: UserService,private router :Router) {}

  // Function to handle profile update
  editProfile() {
    if (this.user) {
      this.userService.updateUserProfile(this.user).subscribe(
        (response) => {
          console.log('Profile updated successfully:', response);
          this.editComplete.emit(); 
          this.errorMessage="";
        },
        (error) => {
          console.error('Error updating profile:', error);
          if (error.status === 400) {
            this.errorMessage = "Numéro de téléphone ou email invalide!";
          } 
          else if (error.status === 500) {
            this.errorMessage = "Ce nom d'utilisateur est déjà pris!";
          } else {
            this.errorMessage = "Une erreur inconnue s'est produite. Veuillez réessayer.";
          }
        }
      );
    }
  }
  goBack(): void {
    this.editComplete.emit(); // Notifie le parent pour fermer l'édition
  }
}
