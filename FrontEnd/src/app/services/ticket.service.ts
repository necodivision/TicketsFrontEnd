import { Injectable } from '@angular/core';

export interface Ticket {
  id: number;
  asunto: string;
  descripcion: string;
  author: string;
  telefono: string;
  ubicacion: string;
  date: string;
  status: 'Abierto' | 'En proceso' | 'Pausado' | 'Postergado' | 'Resuelto';
  prioridad: 'Baja' | 'Media' | 'Alta';
  unidad: 'Soporte' | 'Desarrollo' | 'Infraestructura';
  asignado: 'Sin asignar' | string;
}

@Injectable({ providedIn: 'root' })
export class TicketService {

  private storageKey = 'tickets_app_data';

  constructor() {
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify([]));
    }
  }

  private getAll(): Ticket[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  private saveAll(list: Ticket[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(list));
  }

  add(data: any): Ticket {
    const list = this.getAll();
    const newId = list.length > 0 ? Math.max(...list.map(t => t.id)) + 1 : 1;

    const newTicket: Ticket = {
      id: newId,
      asunto: data.asunto,
      descripcion: data.descripcion,
      author: data.author,
      telefono: data.telefono,
      ubicacion: data.ubicacion,
      status: 'Abierto',
      prioridad: 'Baja',
      unidad: 'Soporte',
      asignado: 'Sin asignar',
      date: new Date().toLocaleString()
    };

    list.push(newTicket);
    this.saveAll(list);

    return newTicket;
  }

  list(): Ticket[] {
    return this.getAll();
  }

  getById(id: number): Ticket | undefined {
    return this.getAll().find(t => t.id === id);
  }
}
