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
  opinions: { username: string; comment: string; rating: number }[] = [];
  
  constructor(private opinionService: OpinionService, private route: ActivatedRoute,private dishService: DishService) {}

  ngOnInit() {  
    this.route.params.subscribe(params => {
      this.dishId = params['id']; // 'id' correspond au nom défini dans la route
      
      this.dishService.getDishById(this.dishId).subscribe({
        next: (data) => {
          this.dish = data;
          console.log('Dish data:', this.dish);
          this.loadOpinions();
        },
        error: (err) => {
          console.error('Error fetching dish:', err);
        }
      });
    });
  }

  stars(rating: number): number[] {
    return new Array(5).fill(0).map((_, i) => i + 1);
  }
  loadOpinions() {
    this.opinionService.getOpinions(this.dish._id).subscribe(
      data => this.opinions = data,
      error => console.error('Error fetching opinions:', error)
    );
  }

  addOpinion(comment: string, rating: number) {
    const username = localStorage.getItem('username');
    if(username){
      const opinion={username,comment, rating };

      this.opinionService.addOpinion(this.dish._id, opinion).subscribe(
        () => this.loadOpinions(),
        error => console.error('Error adding opinion:', error)
      );
    }
    else{
      console.log("username inconnu impossible d'envoyer un avis")
    }
  }
}
