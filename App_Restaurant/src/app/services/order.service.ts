import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private apiUrlOrder = 'http://localhost:3000/order/getAll'; 
  private apiUrlOrderCreate='http://localhost:3000/order/create';
  username = localStorage.getItem('username');
  constructor(private http: HttpClient) {}

  // Méthode pour récupérer les order depuis l'API
  getOrder(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrlOrder}/${this.username}`);
  }

  sendOrder(cartItems: any[]): Observable<any>{
    return this.http.post(this.apiUrlOrderCreate, cartItems);
    
  }
  
}
