import { Component } from '@angular/core';
import { OrdersListComponent } from "../orders-list/orders-list.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [OrdersListComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  ordersOpen: boolean=false;
  ordersText: String ="See my Orders"
  showPassword: boolean = false; // To track password visibility
  
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    profilePhoto: './assets/profile.jpeg',
    password:'test123',
    joinDate: 'January 2023'
  };
  

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  editProfile() {
    //add if we want
  }
  seeOrders() {
    this.ordersOpen=!this.ordersOpen
    if (this.ordersOpen){
      this.ordersText="Hide my Orders"
    }
    else{
      this.ordersText="See my Orders"
    }
    //create a service and modify with api
  }
}
