import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService, Ticket } from '../../../services/ticket.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tickets-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tickets-detail.html',
  styleUrls: ['./tickets-detail.css']
})
export class TicketsDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private ticketService = inject(TicketService);
  private router = inject(Router);

  ticket?: Ticket;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.ticketService.getById(id).subscribe({
        next: t => this.ticket = t,
        error: err => console.error(err)
      });
    }
  }

  back() {
    this.router.navigate(['/user/my-tickets']);
  }
}
