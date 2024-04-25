import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from '../models/Group'; // Modelinizi doğru yere göre güncelleyin
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
 

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private apiUrl = 'https://localhost:44335/api'; // API adresini buraya girin

  constructor(private http: HttpClient) { }

   
  getGroups(): Observable<ListResponseModel<Group>> {
    return this.http.get<ListResponseModel<Group> >(`${this.apiUrl}/Group/getlist`);
  }

  getGroupsByUserId(userId: number): Observable<ListResponseModel<Group>> {
    return this.http.get<ListResponseModel<Group>>(`${this.apiUrl}/Group/getgroupsbyuserid/${userId}`);
  }
  

  createGroup(group: Group,userId: number): Observable<ResponseModel> {
    console.log((this.apiUrl + "/Group/add", { group, userId }));
    return this.http.post<ResponseModel>(`${this.apiUrl}/group/add?userId=${userId}`, group);
  }
 

}
