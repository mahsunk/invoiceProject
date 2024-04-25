import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:44325/api/brands/'; // API adresini buraya girin

  constructor(private http: HttpClient) { }

  // Kullanıcıları getir
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/Users`);
  }

  // Diğer metodları buraya ekleyebilirsiniz
}
