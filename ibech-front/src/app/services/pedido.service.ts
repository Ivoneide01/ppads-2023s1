import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/config/api.config';
import { Pedido } from '../models/pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Pedido> {
    return this.http.get<Pedido>(`${API_CONFIG.baseUrl}/pedidos/${id}`)
  }

  findAll(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${API_CONFIG.baseUrl}/pedidos`);
  }

  create(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(`${API_CONFIG.baseUrl}/pedidos`, pedido);
  }

  update(pedido: Pedido): Observable<Pedido> {
    return this.http.put<Pedido>(`${API_CONFIG.baseUrl}/pedidos/${pedido.id}`, pedido);
  }

  delete(id: any): Observable<Pedido> {
    return this.http.delete<Pedido>(`${API_CONFIG.baseUrl}/pedidos/${id}`)
  }

}
