// opinion.component.ts
import { Component, OnInit } from '@angular/core';
import { OpinionService } from '../../services/opinion.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  opinions: { username: string; rate: number;comment: string }[] = [];
  
  constructor(private opinionService: OpinionService, private route: ActivatedRoute,private dishService: DishService,private router: Router) {}

  ngOnInit() {  
    this.opinions=[];
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

  stars(rate: number): number[] {
    return new Array(5).fill(0).map((_, i) => i + 1);
  }

  loadOpinions() {
    this.opinionService.getOpinions(this.dishId).subscribe({
      next: (data) => {this.opinions = data,
      console.log(data);
      },
      error: (err) => {
        console.error('Error fetching opinions:', err)
      } 
    }
    );
  }

  addOpinion(comment: string, rate: number) {
    const username = localStorage.getItem('username');
    const id_plat = this.dishId;
  
    if (!comment || !rate) {
      alert('Please provide both a comment and a rate');
      return;
    }
  
    if (username) {
      const opinion = { id_plat, username, rate, comment };
  
      this.opinionService.addOpinion(opinion).subscribe(
        () => this.loadOpinions(),
        error => console.error('Error adding opinion:', error)
      );
    } else {
      console.log("Username is unknown, unable to submit opinion");
    }
  }
  goBack(): void {
    this.router.navigate(['/dishes']); // Revenir à la page précédente
  }
  
}