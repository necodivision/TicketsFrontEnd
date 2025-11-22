import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TicketService, Ticket } from '../../services/ticket.service';
import { FormsModule } from '@angular/forms'; // ← NECESARIO para evitar NG8002

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], // ← AÑADIDO
  templateUrl: './staff.html',
  styleUrls: ['./staff.css'],
})
export class Staff implements OnInit {

  tickets: Ticket[] = [];
  filteredTickets: Ticket[] = [];

  filtro: string = "todos";

  resumenEstados = [
    { key: 'todos', label: 'Todos', icon: '📋', color: '#415E72', count: 0 },
    { key: 'Abierto', label: 'Abiertos', icon: '🏷️', color: '#BCCC9A', count: 0 },
    { key: 'En proceso', label: 'En proceso', icon: '🔨', color: '#EAE7C6', count: 0 },
    { key: 'Resuelto', label: 'Resueltos', icon: '✔️', color: '#FFC29B', count: 0 },
    { key: 'Pausado', label: 'Pausados', icon: '⏸️', color: '#D1E8E4', count: 0 },
    { key: 'Postergado', label: 'Postergados', icon: '⏹️', color: '#FFD9C0', count: 0 },
  ];

  constructor(private ticketService: TicketService, private router: Router) {}

  ngOnInit() {
    this.tickets = this.ticketService.list();
    this.filteredTickets = [...this.tickets];

    this.updateResumen();
  }

  updateResumen() {
    this.resumenEstados.forEach(r => {
      if (r.key === 'todos') {
        r.count = this.tickets.length;
      } else {
        r.count = this.tickets.filter(t => t.status === r.key).length;
      }
    });
  }

  aplicarFiltro(estado: string) {
    this.filtro = estado;

    if (estado === 'todos') {
      this.filteredTickets = [...this.tickets];
    } else {
      this.filteredTickets = this.tickets.filter(t => t.status === estado);
    }
  }

  verDetalle(id: number) {
    this.router.navigate(['/staff/ticket', id]);
  }

  goToMyTickets() {
    this.router.navigate(['/user/my-tickets']);
  }

  logout() {
    this.router.navigate(['/select-role']);
  }
}
