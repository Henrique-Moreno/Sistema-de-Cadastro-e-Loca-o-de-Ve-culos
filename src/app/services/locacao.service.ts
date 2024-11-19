import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Locacao {
  id: number;
  clienteId: number;
  carroId: number;
  diasLocados: number;
  valorTotal: number;
}

@Injectable({
  providedIn: 'root',
})
export class LocacaoService {
  private apiUrl = 'http://localhost:3000/locacoes';

  constructor(private http: HttpClient) {}

  getLocacoes(): Observable<Locacao[]> {
    return this.http.get<Locacao[]>(this.apiUrl);
  }

  adicionarLocacao(locacao: Omit<Locacao, 'id'>): Observable<Locacao> {
    return this.http.post<Locacao>(this.apiUrl, locacao);
  }

  removerLocacao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  atualizarLocacao(id: number, locacao: Partial<Locacao>): Observable<Locacao> {
    return this.http.put<Locacao>(`${this.apiUrl}/${id}`, locacao);
  }
}
