import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from '../models/bill';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class BillService {
  private apiUrl = 'https://localhost:44335/api/bills'; // API adresini buraya girin

  constructor(private http: HttpClient) { }

  // Faturaları getir
  getBills(): Observable<ListResponseModel<Bill>> {
    return this.http.get<ListResponseModel<Bill> >(`${this.apiUrl}/getlist`);
  }

  // Bir gruba ait faturaları getir
  getGroupBills(groupId: number): Observable<ListResponseModel<Bill>> {
    return this.http.get<ListResponseModel<Bill>>(`${this.apiUrl}/getbygroupid?id=${groupId}`);
  }

  // Fatura ekle
  addBill(bill: Bill): Observable<any> {
    return this.http.post(`${this.apiUrl}/Bills`, bill);
  }

  // Diğer metodları buraya ekleyebilirsiniz
}
