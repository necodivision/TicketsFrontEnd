import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TicketService, Ticket } from '../../../services/ticket.service';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './staff.html',
  styleUrls: ['./staff.css']
})
export class Staff implements OnInit {

  private router = inject(Router);
  private ticketService = inject(TicketService);

  tickets: Ticket[] = [];             // Todos los tickets traídos de la API
  filteredTickets: Ticket[] = [];     // Tickets filtrados según estado
  filtro: 'Abierto' | 'En proceso' | 'Resuelto' | 'Todos' = 'Todos';

  // Resumen de estados para filtros
  resumenEstados = [
    { key: 'Todos', label: 'Todos', count: 0, color: '#888', icon: '📋' },
    { key: 'Abierto', label: 'Abiertos', count: 0, color: '#f39c12', icon: '🟢' },
    { key: 'En proceso', label: 'En Proceso', count: 0, color: '#3498db', icon: '🟡' },
    { key: 'Resuelto', label: 'Resueltos', count: 0, color: '#2ecc71', icon: '✅' },
  ];

  ngOnInit() {
    this.loadTickets();
  }

  // Cargar tickets desde backend
  loadTickets() {
    this.ticketService.list().subscribe({
      next: (data) => {
        this.tickets = data;
        this.actualizarFiltros();
        this.aplicarFiltro(this.filtro); // inicializar filteredTickets
      },
      error: (err) => {
        console.error('Error al cargar tickets:', err);
        this.tickets = [];
        this.filteredTickets = [];
      }
    });
  }

  // Actualizar conteo de tickets en resumen
  actualizarFiltros() {
    this.resumenEstados.forEach(estado => {
      if (estado.key === 'Todos') {
        estado.count = this.tickets.length;
      } else {
        estado.count = this.tickets.filter(t => t.status === estado.key).length;
      }
    });
  }

  // Aplicar filtro por estado
  aplicarFiltro(key: 'Abierto' | 'En proceso' | 'Resuelto' | 'Todos') {
    this.filtro = key;
    if (key === 'Todos') {
      this.filteredTickets = [...this.tickets];
    } else {
      this.filteredTickets = this.tickets.filter(t => t.status === key);
    }
  }

  // Navegación
  goToMyTickets() {
    this.router.navigate(['/user/my-tickets']); // ajusta según tu ruta real
  }

  logout() {
    this.router.navigate(['/select-role']); // ajusta según tu ruta de logout
  }

  verDetalle(ticketId: number) {
    // Redirigir a detalle del ticket
    this.router.navigate(['/staff/ticket', ticketId]); // ajusta según tu ruta de detalle
  }
}
