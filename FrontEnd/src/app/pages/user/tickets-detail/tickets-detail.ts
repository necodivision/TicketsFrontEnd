import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TicketService, Ticket } from '../../../services/ticket.service';

@Component({
  selector: 'app-tickets-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tickets-detail.html',
  styleUrls: ['./tickets-detail.css']
})
export class TicketsDetailComponent implements OnInit {

  ticket?: Ticket;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ticketService: TicketService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ticket = this.ticketService.getById(id);

    if (!this.ticket) {
      this.router.navigate(['/user/tickets']);
    }
  }

  back() {
    this.router.navigate(['/user/my-tickets']);
  }
}
