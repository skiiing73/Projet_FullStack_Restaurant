import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { StarterListComponent } from './components/starter-list/starter-list.component';
import { DessertListComponent } from './components/dessert-list/dessert-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard'; // Import the AuthGuard
import { SigninComponent } from './components/signin/signin.component';
import { ContactComponent } from './components/contact/contact.component';
import { OpinionComponent } from './components/opinion/opinion.component';
import { SuggestionComponent } from './components/suggestion/suggestion.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dishes', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }, // Login page
  { path: 'register', component: SigninComponent }, // Sginin page
  { path: 'dishes', component: DishListComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'starters', component: StarterListComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'desserts', component: DessertListComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'opinion/:id', component: OpinionComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'suggestion/:id', component: SuggestionComponent, canActivate: [AuthGuard] }, // Protected route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use `forRoot` for the root module
  exports: [RouterModule]
})
export class AppRoutingModule { }
