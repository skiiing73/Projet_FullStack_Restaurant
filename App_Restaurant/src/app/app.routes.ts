import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { StarterListComponent } from './components/starter-list/starter-list.component';
import { DessertListComponent } from './components/dessert-list/dessert-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dishes', pathMatch: 'full' },
  { path: 'dishes', component: DishListComponent }, // Route for the dish list
  { path: 'starters', component: StarterListComponent}, // Route for the dish list
  { path: 'desserts', component: DessertListComponent}, // Route for the dish list
  { path: 'cart', component: CartComponent }, // Route for the cart page
  { path: 'profile', component: ProfileComponent }, // Route for the profile page
  { path: 'about', component: AboutComponent }, // Route for the profile page
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use `forRoot` for the root module
  exports: [RouterModule]
})
export class AppRoutingModule { }
