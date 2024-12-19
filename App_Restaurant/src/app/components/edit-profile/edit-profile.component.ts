import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service'; // Import the UserService

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
  
  constructor(private userService: UserService) {}

  // Function to handle profile update
  editProfile() {
    if (this.user) {
      this.userService.updateUserProfile(this.user).subscribe(
        (response) => {
          console.log('Profile updated successfully:', response);
          this.editComplete.emit(); // Emit an event when editing is complete
        },
        (error) => {
          console.error('Error updating profile:', error);
        }
      );
    }
  }
}
