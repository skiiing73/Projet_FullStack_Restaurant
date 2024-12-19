import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private apiUrlOrder = 'http://localhost:3000/order/getAll'; 
  private apiUrlOrderCreate='http://localhost:3000/order/create';
  
  constructor(private http: HttpClient) {}

  // Méthode pour récupérer les order depuis l'API
  getOrder(): Observable<any[]> {
    const username = localStorage.getItem('username');
    return this.http.get<any[]>(`${this.apiUrlOrder}/${username}`);
  }

  sendOrder(order: {list_id_dish: string[]; username: string | null; status: string; }): Observable<any>{
    return this.http.post(this.apiUrlOrderCreate, order);
    
  }
  
}
