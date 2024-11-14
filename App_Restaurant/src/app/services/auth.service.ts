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

  login(username: string, password: string): Observable<boolean> {
    const body = { username, password };
    return this.http.post<any>(this.apiUrllogin, body).pipe(
      tap((response) => {
        if (response && response.success) { // Vérifier si la réponse est un succès
          this.loggedIn = true;
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem('isAuthenticated', 'true'); // Stocker le statut de connexion
          }
        }
      }),
      catchError((error) => {
        console.error('Login failed', error);
        return of(false); // Retourner `false` si la connexion échoue
      })
    );
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
  }
 
}
