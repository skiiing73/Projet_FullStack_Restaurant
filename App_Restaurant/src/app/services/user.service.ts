import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/user/getUser'; 
  private apiUrlmodif = 'http://localhost:3000/user/updateUser/';
  username = localStorage.getItem('username');

  constructor(private http: HttpClient) {}

  getUserData(): Observable<any> {
    console.log(this.username); // Debugging the username being passed
    return this.http.get<any>(`${this.apiUrl}/${this.username}`);
  }
  updateUserProfile(user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrlmodif}/${this.username}`, user);
  }
}
