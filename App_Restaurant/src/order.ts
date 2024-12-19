// order.ts
import { Dish } from './dish';

export class Order {
  _id: string;
  list_id_dish: Dish[];
  username: string;
  status: string;
  ;
  
  constructor(
    _id: string,
    username: string,
    status: string,
    list_id_dish: Dish[] = []
  ) {
    this._id = _id;
    this.username = username;
    this.status = status;
    this.list_id_dish = list_id_dish;
  }
}
