import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Carro {
  id: number;
  nome: string;
  marca: string;
  placa: string;
  valorLocacao: number;
}

@Injectable({
  providedIn: 'root',
})
export class CarroService {
  private apiUrl = 'http://localhost:3000/carros';

  constructor(private http: HttpClient) { }

  getCarros(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.apiUrl);
  }

  adicionarCarro(carro: Omit<Carro, 'id'>): Observable<Carro> {
    return this.http.post<Carro>(this.apiUrl, carro);
  }

  removerCarro(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
