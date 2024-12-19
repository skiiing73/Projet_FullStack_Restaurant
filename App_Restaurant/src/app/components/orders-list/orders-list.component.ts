// orders-list.component.ts
import { Component } from '@angular/core';
import { OrderComponent } from "../order/order.component";
import { Order } from '../../../order';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { Dish } from '../../../dish';

@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [OrderComponent, CommonModule],
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    // Appeler l'API pour récupérer les orders
    this.orderService.getOrder().subscribe((ordersData) => {
      // Vérification si les données sont valides avant de les mapper
      if (ordersData && Array.isArray(ordersData)) {
        this.orders = ordersData.map((orderData: any) => new Order(
          orderData._id,
          orderData.username,
          orderData.status,
          orderData.list_id_dish ? orderData.list_id_dish.map((dishData: any) => new Dish(
            dishData._id,
            dishData.name,
            dishData.price,
            dishData.type,
            dishData.picture,
            dishData.description
          )) : []
        ));
      } else {
        console.error('Invalid orders data:', ordersData);
      }
    }, (error) => {
      console.error('Error fetching orders:', error);
    });
  }
}
