// opinion.component.ts
import { Component, OnInit } from '@angular/core';
import { OpinionService } from '../../services/opinion.service';
import { ActivatedRoute } from '@angular/router';
import { Dish } from '../../../dish';
import { CommonModule } from '@angular/common';
import { DishService } from '../../services/dish.service';
@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css'],
  standalone:true,
  imports: [CommonModule]
})

export class OpinionComponent implements OnInit{
  dishId!: string;
  dish!:Dish;
  opinions: { user: string; comment: string; rating: number }[] = [];

  constructor(private opinionService: OpinionService, private route: ActivatedRoute,private dishService: DishService) {}

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this._id = params['id'];
    //   this.loadOpinions();
    // });
    this.route.params.subscribe(params => {
      this.dishId = params['id']; // 'id' correspond au nom défini dans la route
      
      this.dishService.getDishById(this.dishId).subscribe({
        next: (data) => {
          this.dish = data;
          console.log('Dish data:', this.dish);
        },
        error: (err) => {
          console.error('Error fetching dish:', err);
        }
      });
    });


    this.opinions=[
      {
        "user": "Alice",
        "comment": "The burger was delicious, cooked to perfection!",
        "rating": 5
      },
      {
        "user": "Bob",
        "comment": "The presentation was nice, but the taste could be improved.",
        "rating": 3
      },
      {
        "user": "Charlie",
        "comment": "Great experience overall, but it was a bit pricey.",
        "rating": 4
      }
    ]
    
  }
  stars(rating: number): number[] {
    return new Array(5).fill(0).map((_, i) => i + 1);
  }
  loadOpinions() {
    // this.opinionService.getOpinions(this.dish._id).subscribe(
    //   data => this.opinions = data,
    //   error => console.error('Error fetching opinions:', error)
    // );
  }

  addOpinion(comment: string, rating: number) {
  //   this.opinionService.addOpinion(this.dish._id, { user, comment, rating }).subscribe(
  //     () => this.loadOpinions(),
  //     error => console.error('Error adding opinion:', error)
  //   );
  }
}
