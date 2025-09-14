import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private apiUrl = "https://api.example.com/colaboradores" // Substitua pela URL real da sua API

  constructor(private http: HttpClient) {}

  getColaborador(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`)
  }

  updateColaborador(id: number, colaborador: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, colaborador)
  }

}
