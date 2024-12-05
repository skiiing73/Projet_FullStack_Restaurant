import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrllogin = 'http://localhost:3000/user/login';
  private apiUrlSingin = 'http://localhost:3000/user/createUser';

  constructor(private router: Router, private http: HttpClient) {}

  // Login function
  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(this.apiUrllogin, body).pipe(
      tap(() => {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('username', username);
      }),
      catchError((error) => {
        console.error('Login error', error);
        return throwError(error); // Utilisez throwError au lieu de Observable.throw
      })
    );
  }
  // Signin function
  signin(username: string, email: string, phone: string, password: string): Observable<any> {
    const body = { username, email, phone, password };
    return this.http.post(this.apiUrlSingin, body).pipe(
      tap(() => {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('username', username);
      }),
      catchError((error) => {
        console.error('Signin error', error);
        return throwError(error); // Utilisez throwError au lieu de Observable.throw
      })
    );
  }
  // Check if user is logged in
  isLoggedIn(): boolean {
    return (
      typeof localStorage !== 'undefined' && localStorage.getItem('isAuthenticated') === 'true'
    );
  }

  // Logout function
  logout(): void {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    this.router.navigate(['/login']); // Redirect to login page
  }

  
}
