import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { OrdersListComponent } from "../orders-list/orders-list.component";
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [OrdersListComponent, EditProfileComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  ordersOpen = false;
  ordersText = "See my Orders";
  showPassword = false;
  editOpen = false;

  user: any = {}; // The user data that will be updated

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserData().subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.error('Error fetching user data', error);
      }
    );
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  editProfile() {
    this.editOpen = !this.editOpen;
  }

  seeOrders() {
    this.ordersOpen = !this.ordersOpen;
    this.ordersText = this.ordersOpen ? "Hide my Orders" : "See my Orders";
  }

  // Handle the profile edit completion
  onEditComplete() {
    this.editOpen = false; // Close the edit form when update is complete
    this.userService.getUserData().subscribe(
      data => {
        this.user = data; // Reload the updated user data
      },
      error => {
        console.error('Error fetching updated user data', error);
      }
    );
  }
}
