// opinion.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpinionService {
  private apiUrl = 'http://localhost:3000/opinion/getByID'; // URL de l'API

  constructor(private http: HttpClient) {}

  getOpinions(dishId: string): Observable<{ username: string; comment: string; rating: number }[]> {
    return this.http.get<{ username: string; comment: string; rating: number }[]>(`${this.apiUrl}/${dishId}`);
  }

  addOpinion(dishId: string, opinion: { username:string; comment: string; rating: number }): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${dishId}`, opinion);
  }
}
