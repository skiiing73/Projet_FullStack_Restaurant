import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,DishListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App_Restaurant';
}
