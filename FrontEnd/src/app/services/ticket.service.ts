import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ticket {
  id?: number;
  asunto: string;
  descripcion: string;
  author: string;
  telefono: string;
  ubicacion: string;
  date?: string;
  status?: 'Abierto' | 'En proceso' | 'Resuelto';
}

@Injectable({ providedIn: 'root' })
export class TicketService {

  private api = 'http://localhost:3000/api/tickets'; // cambia si tu backend usa otra URL

  constructor(private http: HttpClient) {}

  // ====== CREAR TICKET EN LA API ======
  add(data: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.api, data);
  }

  // ====== OBTENER TODOS LOS TICKETS ======
  list(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.api);
  }

  // ====== OBTENER UN TICKET POR ID ======
  getById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.api}/${id}`);
  }
}
