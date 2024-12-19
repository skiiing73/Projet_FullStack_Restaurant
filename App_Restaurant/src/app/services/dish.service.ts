import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Importer HttpClient
import { Observable } from 'rxjs'; // Importer Observable

@Injectable({
  providedIn: 'root'
})
export class DishService {
  private apiUrlDish = 'http://localhost:3000/dish/getByType/Main Course'; 
  private apiUrlStarter = 'http://localhost:3000/dish/getByType/Starter'; 
  private apiUrlDessert = 'http://localhost:3000/dish/getByType/Dessert'; 
  private apiOneDish= 'http://localhost:3000/dish/getByID';
  constructor(private http: HttpClient) {}

  // Méthode pour récupérer les plats depuis l'API
  getDishes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlDish);
  }
  getStarter(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlStarter);
  }
  getDessert(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlDessert);
  }
  getDishById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiOneDish}/${id}`);
  }
}
