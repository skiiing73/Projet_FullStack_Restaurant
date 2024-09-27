export class Dish {
    id: number;
    name: string;
    price: number;
    type:string;
    photo:string;
    description:string;

    constructor(id: number, name: string, price: number,
    type: string, photo:string,decription:string) {
        this.id = id;
        this.name = name;
        this.price=price;
        this.type=type; 
        this.photo=photo; 
        this.description=decription;
}
}
/*[
    {
      id: 1,
      nom: 'The Lovely Burger',
      description: 'High quality beef medium to well with cheese and bacon on a multigrain bun',
      prix: 19.99,
      photo: 'assets/burger.jpg',
      type: 'Dish'
    },
    {
      id: 2,
      nom: 'American HOT DOG',
      description: 'High quality beef medium to well with cheese and bacon on a multigrain bun',
      prix: 15.99,
      photo: 'assets/hotdog.jpg',
      type: 'Dish'
    }
  ];
*/
  