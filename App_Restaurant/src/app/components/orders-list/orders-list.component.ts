import { Component } from '@angular/core';
import { OrderComponent } from "../order/order.component";
import { Dish } from '../../../dish';
import { Order } from '../../../order';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [OrderComponent,CommonModule],
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent {
  orders: any[] = [];
  constructor(private orderService: OrderService) {} // Injection du service
  
    ngOnInit() {
      // Appeler l'API pour récupérer les orders
      this.orderService.getOrder().subscribe((ordersdata) => {
        this.orders = ordersdata;  // Mettre à jour les orders dans le composant
      });
    }
  

}
