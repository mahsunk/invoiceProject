import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../models/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'YOUR_API_URL'; // API adresini buraya girin

  constructor(private http: HttpClient) { }

  // Kullanıcının ödemelerini getir
  getUserPayments(userId: number): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.apiUrl}/Payments?UserId=${userId}`);
  }

  // Ödeme ekle
  addPayment(payment: Payment): Observable<any> {
    return this.http.post(`${this.apiUrl}/Payments`, payment);
  }

  // Diğer metodları buraya ekleyebilirsiniz
}
