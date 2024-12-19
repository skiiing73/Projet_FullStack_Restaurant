import { Dish } from './dish';

export class Order {
    dishes: Dish[]; // Array of Dish objects
    username:string;
    status:string

    constructor(dishes: Dish[] = [],username:string,status:string) {
        this.dishes = dishes;
        this.username=username;
        this.status=status;
    }

    // Method to calculate total price of the order
    getTotalPrice(): number {
        return this.dishes.reduce((total, dish) => total + dish.price, 0);
    }
}
