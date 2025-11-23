import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TicketService, Ticket } from '../../services/ticket.service';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './staff.html',
  styleUrls: ['./staff.css']
})
export class Staff implements OnInit {
  private ticketService = inject(TicketService);
  private router = inject(Router);

  tickets: Ticket[] = [];
  filteredTickets: Ticket[] = [];
  filtro: 'Todos' | 'Abierto' | 'En proceso' | 'Resuelto' = 'Todos';

  ngOnInit() {
    this.loadTickets();
  }

  loadTickets() {
    this.ticketService.list().subscribe({
      next: (t) => {
        this.tickets = t;
        this.filteredTickets = [...t];
      },
      error: (err) => console.error('Error al cargar tickets', err)
    });
  }

  // Función para filtrar tickets
  aplicarFiltro(status: 'Todos' | 'Abierto' | 'En proceso' | 'Resuelto') {
    this.filtro = status;
    this.filteredTickets = status === 'Todos'
      ? this.tickets
      : this.tickets.filter(t => t.status === status);
  }

  // Función para ir a la página de tickets de usuario
  goToMyTickets() {
    this.router.navigate(['/user/my-tickets']);
  }

  // Función de cerrar sesión
  logout() {
    this.router.navigate(['/select-role']);
  }

  // Función de resumen de estados
  resumenEstados() {
    const resumen = {
      Abierto: 0,
      'En proceso': 0,
      Resuelto: 0
    };
    this.tickets.forEach(t => {
      if (t.status) resumen[t.status]++;
    });
    return resumen;
  }

  // Función para ver detalle de un ticket
  verDetalle(id?: number) {
    if (id) this.router.navigate(['/user/ticket', id]);
  }
}
