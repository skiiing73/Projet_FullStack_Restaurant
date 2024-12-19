import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/user/getUser'; 
  private apiUrlmodif = 'http://localhost:3000/user/updateUser';
  
  constructor(private http: HttpClient) {}

  getUserData(): Observable<any> {
    const username = localStorage.getItem('username');

    console.log(username); // Debugging the username being passed
    return this.http.get<any>(`${this.apiUrl}/${username}`);
  }
  updateUserProfile(user: any): Observable<any> {
    const username = localStorage.getItem('username');
    return this.http.put<any>(`${this.apiUrlmodif}/${username}`, user);
  }
}
