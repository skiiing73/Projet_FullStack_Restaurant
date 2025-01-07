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
    this.orderService.getOrder().subscribe(
      (ordersData) => {
        if (ordersData && Array.isArray(ordersData)) {
          this.orders = ordersData.map((orderData: any) => {
            const dishes = Array.isArray(orderData.list_id_dish)
              ? orderData.list_id_dish.map((dishData: any) =>
                  new Dish(
                    dishData._id,
                    dishData.name,
                    dishData.price,
                    dishData.type,
                    dishData.picture,
                    dishData.description
                  )
                )
              : []; // Si `list_id_dish` n'est pas un tableau, retournez une liste vide
  
            return new Order(
              orderData._id,
              orderData.username,
              orderData.status,
              dishes
            );
          });
          this.orders.reverse();
        } else {
          console.error('Invalid orders data:', ordersData);
        }
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }
}  
