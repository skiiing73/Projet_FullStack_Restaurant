import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  //a remplacer quand api
  private userData = {
    username: 'testuser',

    password: 'coco73'
  };
  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === this.userData.username && password === this.userData.password) {
      this.loggedIn = true;
      localStorage.setItem('isAuthenticated', 'true'); // Store authentication status
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.setItem('isAuthenticated', 'false'); // Store authentication status
    this.router.navigate(['/login']); // Redirect to login
  }

  isLoggedIn(): boolean {
    // Check if localStorage is available and retrieve the authentication status
    if (typeof window !== 'undefined') {
        return localStorage.getItem('isAuthenticated') === 'true';
      }
      return false; // Not in a browser environment
  }
 
  signin(username:string,mail:string,phone:string,password:string):void{
    //a remplir quand api
    this.loggedIn = true;
      localStorage.setItem('isAuthenticated', 'true');
  }
 
}
