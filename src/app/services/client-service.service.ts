import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'https://backendfinal-latest.onrender.com/api/clients';

  constructor(private http: HttpClient) { }


  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); 
    if (token) {
   
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    } else {
      console.error('No se encontró el token en localStorage');
      return new HttpHeaders(); 
    }
  }
 
  getAllClients(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  createClient(client: any): Observable<any> {
    return this.http.post(this.apiUrl, client, { headers: this.getHeaders() });
  }

  updateClient(id: number, client: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, client, { headers: this.getHeaders() });
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
