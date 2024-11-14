

export class Dish {
    _id: string;
    name: string;
    price: number;
    type:string;
    picture:string;
    description:string;

    constructor(_id: string, name: string, price: number,
    type: string, picture:string,decription:string) {
        this._id = _id;
        this.name = name;
        this.price=price;
        this.type=type; 
        this.picture=picture; 
        this.description=decription;
}
}
