import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ticket {
  id?: number;
  asunto: string;
  descripcion: string;
  author: string;
  telefono?: string;
  ubicacion?: string;
  date?: string;
  status?: 'Abierto' | 'En proceso' | 'Resuelto';
  prioridad?: string;
  asignado?: string;
}

@Injectable({ providedIn: 'root' })
export class TicketService {
  private api = 'http://localhost:3000/api/tickets';

  constructor(private http: HttpClient) {}

  add(data: Partial<Ticket>): Observable<Ticket> {
    return this.http.post<Ticket>(this.api, data);
  }

  list(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.api);
  }

  getById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.api}/${id}`);
  }
}
