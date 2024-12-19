// opinion.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpinionService {
  private apiUrl = 'http://localhost:3000/opinion/getByID'; // URL de l'API
  private apiUrlcreate = 'http://localhost:3000/opinion/create'; // URL de l'API
  constructor(private http: HttpClient) {}

  getOpinions(dishId: string): Observable<{_id:string;dishId:string; username: string; rate: number;comment: string  }[]> {
   
    return this.http.get<{_id:string;dishId:string; username: string;rate: number;comment: string }[]>(`${this.apiUrl}/${dishId}`);
  }

  addOpinion(opinion: { id_plat: string; username: string; rate: number; comment: string }): Observable<void> {
    return this.http.post<void>(`${this.apiUrlcreate}`, opinion);
  }
  
}
