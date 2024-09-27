import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DishListComponent } from './components/dish-list/dish-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DishListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App_Restaurant';
}
