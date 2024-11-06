import { Dish } from './dish';

export class Order {
    dishes: Dish[]; // Array of Dish objects

    constructor(dishes: Dish[] = []) {
        this.dishes = dishes;
    }

    // Method to calculate total price of the order
    getTotalPrice(): number {
        return this.dishes.reduce((total, dish) => total + dish.price, 0);
    }
}
