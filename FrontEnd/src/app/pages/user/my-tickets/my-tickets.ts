import { Component } from '@angular/core';
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
export class MyTickets {

  tickets: Ticket[] = [];
  filteredTickets: Ticket[] = [];

  // FILTROS
  filterStatus: string = "Todos";

  // PAGINACIÓN
  currentPage = 1;
  itemsPerPage = 5;
  totalPages = 1;

  paginatedTickets: Ticket[] = [];

  constructor(private router: Router, private ticketService: TicketService) {}

  ngOnInit() {
    this.tickets = this.ticketService.list();
    this.applyFilter();
  }

  /* FILTRO */
  applyFilter() {
    if (this.filterStatus === "Todos") {
      this.filteredTickets = this.tickets;
    } else {
      this.filteredTickets = this.tickets.filter(t => t.status === this.filterStatus);
    }

    this.currentPage = 1;
    this.updatePagination();
  }

  /* PAGINACIÓN */
  updatePagination() {
    this.totalPages = Math.ceil(this.filteredTickets.length / this.itemsPerPage);

    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    this.paginatedTickets = this.filteredTickets.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  /* NAVEGACIÓN */
  backToPanel() {
    this.router.navigate(['/user/panel']);
  }

  openTicket(t: Ticket) {
    this.router.navigate(['/user/ticket', t.id]);
  }
}
