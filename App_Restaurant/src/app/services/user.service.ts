import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/user'; 
  username=localStorage.getItem('username')
  constructor(private http: HttpClient) {}

  getUserData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getUser/${this.username}`);
  }
}
