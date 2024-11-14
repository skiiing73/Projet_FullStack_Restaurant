import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private apiUrllogin = 'http://localhost:3000/user/login';

  constructor(private router: Router, private http: HttpClient) {}

  login(username: string, password: string): boolean {
    const body = { username, password };
    localStorage.setItem('isAuthenticated', 'true');
    if (this.http.post(this.apiUrllogin, body)){
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }; 
    return false;
  }

  isLoggedIn(): boolean {
    return (
      this.loggedIn ||
      (typeof localStorage !== 'undefined' && localStorage.getItem('isAuthenticated') === 'true')
    );
  }

  logout(): void {
    this.loggedIn = false;
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('isAuthenticated'); // Supprimer le statut de connexion
    }
    this.router.navigate(['/login']); // Rediriger vers la page de connexion
  }


  signin(username:string,mail:string,phone:string,password:string):void{
    //a remplir quand api
    this.loggedIn = true;
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('username', username);
  }
 
}
