import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Make sure to import RouterModule
import { AppComponent } from './app.component';
import { DishComponent } from './components/dish/dish.component'; // Adjust the path as needed
import { DishListComponent } from './components/dish-list/dish-list.component'; // Adjust the path as needed

@NgModule({
  declarations: [
    AppComponent,
    DishComponent, // Declare the DishComponent
    DishListComponent // Declare the DishListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule // Include RouterModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
