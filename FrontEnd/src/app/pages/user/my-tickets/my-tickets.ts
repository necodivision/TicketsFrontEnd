import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TicketService, Ticket } from '../../../services/ticket.service';

@Component({
  selector: 'app-my-tickets',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './my-tickets.html',
  styleUrls: ['./my-tickets.css']
})
export class MyTickets implements OnInit {
  private ticketService = inject(TicketService);
  private router = inject(Router);

  tickets: Ticket[] = [];
  filteredTickets: Ticket[] = [];
  filterStatus: 'Todos' | 'Abierto' | 'En proceso' | 'Resuelto' = 'Todos';
  currentPage = 1;
  itemsPerPage = 5;
  totalPages = 1;
  paginatedTickets: Ticket[] = [];

  ngOnInit() {
    this.loadTickets();
  }

  loadTickets() {
    this.ticketService.list().subscribe({
      next: (data) => {
        this.tickets = data;
        this.applyFilter();
      },
      error: (err) => console.error(err)
    });
  }

  applyFilter() {
    this.filteredTickets = this.filterStatus === 'Todos'
      ? [...this.tickets]
      : this.tickets.filter(t => t.status === this.filterStatus);

    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredTickets.length / this.itemsPerPage);
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedTickets = this.filteredTickets.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) { this.currentPage++; this.updatePagination(); }
  }

  prevPage() {
    if (this.currentPage > 1) { this.currentPage--; this.updatePagination(); }
  }

  backToPanel() {
    this.router.navigate(['/user/panel']);
  }

  openTicket(t: Ticket) {
    if (t.id !== undefined) this.router.navigate(['/user/ticket', t.id]);
  }
}
